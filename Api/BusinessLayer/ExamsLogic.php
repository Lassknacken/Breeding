<?php
    require_once('./DataAccessLayer/Exams.php');


    class examsLogic{

        private $dal;

        function __construct(){
            $this->dal=new exams();
        }

        public function get($page,$size)
        {
            $exams=$this->dal->get($page,$size);

            return $exams;
        }

        public function getId($id){
            $exam= $this->dal->getId($id);
            
            return $exam;
        }

        public function getByDog($id){
            $result = $this->dal->getByDog($id);

            return $result;
        }

        public function updateDog($id,$update){
            $exams= $this->getByDog($id);
            
            $this->dal->updateDog($id,$update);
        }
    }
?>