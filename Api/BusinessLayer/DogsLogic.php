<?php
    require_once('FormvaluesLogic.php');
    require_once('ExamsLogic.php');
    require_once('./DataAccessLayer/Dogs.php');
    // require('../DataAccessLayer/Formvalues.php');


    class dogsLogic{

        private $dalDogs;
        private $blFormvalues;
        private $blExams;

        function __construct(){
            $this->blFormvalues= new formvaluesLogic();
            $this->blExams= new examsLogic();
            
            $this->dalDogs=new dogs();
        }

        public function get($page,$size)
        {
            $dogs=$this->dalDogs->get($page,$size);

            return $dogs;
        }

        public function getId($id){
            $dog= $this->dalDogs->getId($id);

            return $dog;
        }

        public function getFullId($id){
            $dog= $this->dalDogs->getId($id);
            
            $dog->Formvalue=$this->blFormvalues->getId($dog->FormvalueId);
            $dog->Exams=$this->blExams->getByDog($dog->Id);

            return $dog;
        }

        public function getByKennel($id){
            $result=$this->dalDogs->getByKennel($id);

            return $result;
        }

        public function searchDogs($search,$page,$size){
            if(!isset($search)){
                return null;
            }

            return $this->dalDogs->search($search,$page,$size);

            return null;
        }

        public function updateDog($id,$update){
            $dog=$this->getFullId($id);
            
            $this->dalDogs->update($id,$dog,$update);
        }
    }
?>