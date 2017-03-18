<?php
    require("IController.php");
    require_once('./BusinessLayer/DogsLogic.php');
    require_once('./BusinessLayer/AuthLogic.php');

    class controller implements iController{

        private $dogsLogic;

        function __construct(){
            $this->dogsLogic= new dogsLogic();
            $this->authLogic= new authLogic();
        }

        public function get($page,$size){
            // $identity = $this->authLogic->auth();

            $test= $this->dogsLogic->get($page,$size);
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
                return $this->dogsLogic->getFullId($id);
            }

            return $this->dogsLogic->getId($id);
        }

        public function post($dog){
            return $this->dogsLogic->createDog($dog);
        }

        public function put($id,$dog){
            return $this->dogsLogic->updateDog($dog);
        }

    }

?>