<?php
    require("IController.php");
    require_once('./BusinessLayer/DogsLogic.php');
    require_once('./BusinessLayer/AuthLogic.php');
    require_once('./Models/DogSearch.php');

    class controller implements iController{

        private $dogsLogic;

        function __construct(){
            $this->dogsLogic= new dogsLogic();
            $this->authLogic= new authLogic();
        }

        public function get($page,$size){
            return null;


            // $test= $this->dogsLogic->get($page,$size);
            // return $test;
        }

        public function getId($id,$full){
            return null;


            // if(is_string($id)){
            //     $id=intval($id);
            // }
            
            // if(!is_int($id)){
            //     return null;
            // }

            // if($full){
            //     return $this->dogsLogic->getFullId($id);
            // }

            // return $this->dogsLogic->getId($id);
        }

        public function post($search,$page=null,$size=null){
            
            $dogSearch=new dogSearch($search);
            // if(isset($search)){
            //     $search=new dogSearch($search);
            // }

            return $this->dogsLogic->searchDogs($dogSearch,$page,$size);
        }

        public function put($id,$dog){
            return null;
            // return $this->dogsLogic->updateDog($dog);
        }

    }

?>