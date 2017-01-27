<?php
namespace BusinessLayer{
    require ('FormvaluesLogic.php');
    require ('ExamsLogic.php');
    require('./DataAccessLayer/Dogs.php');
    // require('../DataAccessLayer/Formvalues.php');


    class dogsLogic{

        private $dalDogs;
        private $blFormvalues;
        private $blExams;

        function __construct(){
            $this->blFormvalues= new formvaluesLogic();
            $this->blExams= new examsLogic();
            
            $this->dalDogs=new \DataAccessLayer\dogs();
        }

        public function get()
        {
            $dogs=$this->dalDogs->get();

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
    }
}
?>