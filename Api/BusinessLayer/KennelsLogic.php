<?php
    require('./DataAccessLayer/Kennels.php');
    require('DogsLogic.php');


    class kennelsLogic{

        private $dal;
        private $blDogs;

        function __construct(){
            $this->dal=new kennels();
            
            $this->blDogs= new dogsLogic();
        }

        public function get($page,$size)
        {
            $results=$this->dal->get($page,$size);

            return $results;
        }

        public function getId($id){
            $result= $this->dal->getId($id);

            return $result;
        }

        public function getFullId($id){
            $result= $this->dal->getId($id);
            
            $result->Dogs=$this->blDogs->getByKennel($id);

            return $result;
            
        }

        public function getByUser($id){
            $result=$this->dal->getByUser($id);

            return $result;
        }
    }
?>