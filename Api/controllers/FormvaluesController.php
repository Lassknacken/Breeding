<?php
namespace Controller{
    require("BaseController.php");
    require('./BusinessLayer/FormvaluesLogic.php');
      
    class controller implements iController{

        private $formvaluesLogic;

        function __construct(){
            $this->formvaluesLogic= new \BusinessLayer\formvaluesLogic();
        }

        public function get(){

            $test= $this->formvaluesLogic->get();
            return $test;
        }

        public function getId($id,$full){
                
                if(is_string($id)){
                    $id=intval($id);
                }
                
                if(!is_int($id)){
                    return null;
                }


            return $this->formvaluesLogic->getDog($id);
        }

        public function post($formvalue){
            // return $this->formvaluesLogic->createFormvalue($formvalue);
        }

        public function put($id,$formvalue){
            // return $this->formvaluesLogic->updateFormvalue($formvalue);
        }

    }
}
?>