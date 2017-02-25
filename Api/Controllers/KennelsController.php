<?php
    require("IController.php");
    require('./BusinessLayer/KennelsLogic.php');
      
    class controller implements iController{

        private $logic;

        function __construct(){
            $this->logic= new kennelsLogic();
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

        public function post($kennel){
            // return $this->logic->createFormvalue($formvalue);
        }

        public function put($id,$kennel){
            // return $this->logic->updateFormvalue($formvalue);
        }

    }
?>