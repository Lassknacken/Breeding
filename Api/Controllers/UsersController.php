<?php
    require("IController.php");
    require_once('./BusinessLayer/UsersLogic.php');
    require_once('./BusinessLayer/AuthLogic.php');
      
    class controller implements iController{

        private $logic;
        private $authLogic;

        function __construct(){
            $this->logic= new usersLogic();
            $this->authLogic= new authLogic();
        }

        public function get($page,$size){
            $identity = $this->authLogic->auth();

            $user= $this->logic->getId($identity);

            return $user;
        }

        public function getId($id,$full){

            if(is_string($id)){
                $id=intval($id);
            }
            
            if(!is_int($id)){
                return null;
            }

            $identity = $this->authLogic->auth();

            if($identity->Id!=$id){
                return null;
            }

            if($full){
                return $this->logic->getFullId($id);
            }

            return $this->logic->getId($id);
        }

        public function post($user){
            // return $this->logic->createFormvalue($formvalue);
        }

        public function put($id,$user){
            // return $this->logic->updateFormvalue($formvalue);
        }

    }
?>