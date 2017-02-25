<?php
    require("IController.php");
    require('./BusinessLayer/ExamsLogic.php');

    class controller implements iController{

        private $examsLogic;

        function __construct(){
            $this->examsLogic= new ExamsLogic();
        }

        public function get($page,$size){

            $test= $this->examsLogic->get($page,$size);
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
                return $this->examsLogic->getFullId($id);
            }

            return $this->examsLogic->getId($id);
        }

        public function post($exam){
            return $this->examsLogic->createDog($exam);
        }

        public function put($id,$exam){
            return $this->examsLogic->updateDog($exam);
        }

    }

?>