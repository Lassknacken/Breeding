<?php
require('./DataAccessLayer/Users.php');
require('KennelsLogic.php');

class usersLogic{

    private $dalUsers;
    private $blKennels;

    function __construct(){
        $this->dalUsers=new users();
        $this->blKennels=new kennelsLogic();
    }

    public function get($page,$size)
    {
        $users=$this->dalUsers->get($page,$size);

        return $users;
    }

    public function getId($id){
        $user= $this->dalUsers->getId($id);
        
        return $user;
    }

    public function getFullId($id){
        $user= $this->dalUsers->getId($id);

        $user->Kennels=$this->blKennels->getByUser($user->Id);
        
        return $user;
    }

    public function authenticate($username,$password){

        $user=$this->dalUsers->getByUsername($username);

        $dbPassword = $this->dalUsers->getPassword($user->Id);

        if(!isset($dbPassword)){
            return false;
        }
        
        $auth=password_verify($password,$dbPassword);

        $session=uniqid();

        $session=password_hash($session,PASSWORD_DEFAULT);
        if($this->dalUsers->setSession($user->Id,$session)){
            return $session;
        }else{
            return null;
        }
    }
}
?>