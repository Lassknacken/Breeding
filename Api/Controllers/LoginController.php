<?php
    require("IController.php");
    require_once('./BusinessLayer/AuthLogic.php');
      
    class controller /*implements iController*/{

        private $authLogic;

        function __construct(){
            $this->authLogic= new authLogic();
        }

        public function get($page,$size){

            $user =$this->authLogic->auth(true);

             return $user;
        }

        public function getId($id,$full){
            
            $user =$this->authLogic->auth();

            return $user;
        }

        public function post($login,$page=null,$size=null){

            $authorised =$this->authLogic->authenticate($login["username"],$login["password"]);

            if(isset($authorised)){
                // header("Authorization: {$authorised}");
                setcookie("BreedCookie", $authorised->Session);
                return $authorised;
            }else{
                throw new AuthException("unauthorized");
            }
           
            return;
            // return $this->formvaluesLogic->createFormvalue($formvalue);
        }

        public function put($id,$session){
            // return $this->formvaluesLogic->updateFormvalue($formvalue);
        }

    }
?>