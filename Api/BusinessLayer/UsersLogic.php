<?php
namespace BusinessLayer{
    require('./DataAccessLayer/Users.php');
    require('KennelsLogic.php');


    class usersLogic{

        private $dalUsers;
        private $blKennels;

        function __construct(){
            $this->dalUsers=new \DataAccessLayer\users();
            $this->blKennels=new \BusinessLayer\kennelsLogic();
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
    }
}
?>