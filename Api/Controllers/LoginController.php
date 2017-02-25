<?php
    require("IController.php");
    require('./BusinessLayer/UsersLogic.php');
      
    class controller implements iController{

        private $usersLogic;

        function __construct(){
            $this->usersLogic= new usersLogic();
        }

        public function get($page,$size){

            // $test= $this->formvaluesLogic->get($page,$size);

            // return $test;
        }

        public function getId($id,$full){
                
                if(is_string($id)){
                    $id=intval($id);
                }
                
                if(!is_int($id)){
                    return null;
                }


            return null;//$this->formvaluesLogic->getId($id);
        }

        public function post($login){
            
            $test = $_COOKIE["BreedCookie"];

            $authorised =$this->usersLogic->authenticate($login["username"],$login["password"]);

            if(isset($authorised)){
                // header("Authorization: {$authorised}");
                setcookie("BreedCookie", $authorised);
            }else{
                header("HTTP/1.1 401 Unauthorized");
            }
           
            return $login;
            // return $this->formvaluesLogic->createFormvalue($formvalue);
        }

        public function put($id,$formvalue){
            // return $this->formvaluesLogic->updateFormvalue($formvalue);
        }

    }
?>