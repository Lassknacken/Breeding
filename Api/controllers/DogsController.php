<?php
namespace Controller{
    require("BaseController.php");
    require('./BusinessLayer/DogsLogic.php');

    class controller implements iController{

        private $dogsLogic;

        function __construct(){
            $this->dogsLogic= new \BusinessLayer\dogsLogic();
        }

        public function get(){

            $test= $this->dogsLogic->get();
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
}

?>