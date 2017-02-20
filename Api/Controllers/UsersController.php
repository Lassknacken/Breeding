<?php
namespace Controller{
    require("IController.php");
    require('./BusinessLayer/UsersLogic.php');
      
    class controller implements iController{

        private $logic;

        function __construct(){
            $this->logic= new \BusinessLayer\usersLogic();
        }

        public function get($page,$size){

            $test= $this->logic->get($page,$size);

            return $test;
        }

        public function getId($id,$full){
                
            if(is_string($id)){
                $id=intval($id);
            }
            
            if(!is_int($id)){
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
}
?>