<?php
require_once('./DataAccessLayer/Users.php');
require_once('KennelsLogic.php');

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
        $user= $this->dalUsers->getById($id);
        
        return $user;
    }

    public function getFullId($id){
        $user= $this->dalUsers->getById($id);

        $user->Kennels=$this->blKennels->getByUser($user->Id);
        
        return $user;
    }

    public function getByUsername($username){
        return $this->dalUsers->getByUsername($username);
    }

    public function getPassword($userId){
        return $this->dalUsers->getPassword($userId);
    }

    public function getBySession($session){
        return $this->dalUsers->getBySession($session);
    }

    public function setSession($userId,$session){
        return $this->dalUsers->setSession($userId,$session);
    }

}
?>