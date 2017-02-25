<?php
    require('./DataAccessLayer/Exams.php');


    class examsLogic{

        private $dal;

        function __construct(){
            $this->dal=new exams();
        }

        public function get()
        {
            $dogs=$this->dal->get();

            return $dogs;
        }

        public function getId($id){
            $exam= $this->dal->getId($id);
            
            return $exam;
        }

        public function getByDog($id){
            $result = $this->dal->getByDog($id);

            return $result;
        }
    }
?>