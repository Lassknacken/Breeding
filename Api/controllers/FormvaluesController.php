<?php
    require("IController.php");
    require_once('./BusinessLayer/FormvaluesLogic.php');
      
    class controller implements iController{

        private $formvaluesLogic;

        function __construct(){
            $this->formvaluesLogic= new formvaluesLogic();
        }

        public function get($page,$size){

            $test= $this->formvaluesLogic->get($page,$size);

            return $test;
        }

        public function getId($id,$full){
                
                if(is_string($id)){
                    $id=intval($id);
                }
                
                if(!is_int($id)){
                    return null;
                }


            return $this->formvaluesLogic->getId($id);
        }

        public function post($formvalue,$page=null,$size=null){
            // return $this->formvaluesLogic->createFormvalue($formvalue);
        }

        public function put($id,$formvalue){
            // return $this->formvaluesLogic->updateFormvalue($formvalue);
        }

    }
?>