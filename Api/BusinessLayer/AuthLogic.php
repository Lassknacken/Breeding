<?php
require_once('UsersLogic.php');
require_once('./Exceptions/AuthException.php');

class authLogic{
    private $blUsers;

    function __construct(){
        $this->blUsers=new usersLogic();
    }

    public function auth($suppressError=false){
            $user=null;

            if(isset($_COOKIE["BreedCookie"])){
                $session = $_COOKIE["BreedCookie"];
                $user= $this->authSession($session);
            }

            if($user==null && !$suppressError){
                throw new AuthException("unauthorized");
            }

            return $user;
        }

    public function authSession($session){
        $authorized=false;

        $user= $this->blUsers->getBySession($session);
        
        return $user;
    }

    public function authenticate($username,$password){

        $user=$this->blUsers->getByUsername($username);

        if($user==null){
            return null;
        }
        $dbPassword = $this->blUsers->getPassword($user->Id);

        if(!isset($dbPassword)){
            return false;
        }
        
        $auth=password_verify($password,$dbPassword);

        if($auth==true){
            $session=uniqid();
            $session=password_hash($session,PASSWORD_DEFAULT);
            if($this->blUsers->setSession($user->Id,$session)){
                $user->Session=$session;
                return $user;
            }
        }

        return null;
    }
}
?>