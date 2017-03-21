<?php
require_once("Sql.php");
require_once("./Models/Exam.php");

    class exams{

        private $sql;

        function __construct()
        {
            $this->sql= new sql();
        }

        public function get($page,$size)
        {    

            try{
                $exams= $this->getModels($page,$size);

                $result=$this->transformAll($exams);
                return $result;
            }
            catch(exception $ex){
                return $ex;
            }
        }

        public function getId($id)
        {
            $examModel= $this->getModel($id);

            $result=$this->transform($examModel);
            
            return $result;
        }

        public function getByDog($id){
            $exams = $this->getModelByDog($id);

            $result= $this->transformAll($exams);

            return $result;
        }

        public function create($exam)
        {

        }

        public function update($id,$exam)
        {
            
        }

        public function updateDog($id,$update){
            
            $this->updateModel($id,$update);
            $exams=$this->getByDog($id);
        }

        //=====

        private function getModels($page,$size){
             $query="select * from exams";
            $exams= $this->sql->queryPaged($query,$page,$size);
            
            return $exams;
        }

        private function getModel($id){
            if(!is_int($id)){
                return null;
            }

            $exams= $this->sql->query("select * from exams where id={$id}");

            if($exams==null || sizeof($exams)!=1){
                return null;
            }

            return $exams[0];
        }

        private function getModelByDog($id){
            $exams= $this->sql->query(
                "select exams.* from exams 
                join dogs_exams
                on exams.id =dogs_exams.exam_id
                where dogs_exams.dog_id={$id}
            ");
            
            return $exams;
        }

        private function updateModel($id,$update){

            $sql="Delete from dogs_exams where dog_id={$id};";
            $this->sql->query($sql);
            foreach($update as $new){
                $sql="Insert into dogs_exams (dog_id,exam_id)values({$id},{$new->Id});";
                $this->sql->query($sql);
            }
            
            // $this->sql->query($sql);
            return;
        }

        private function transformAll($exams){
            $result=array();
            foreach($exams as $exam){
                array_push($result,$this->transform($exam));
            }
            return $result;
        }

        private function transform($dbItem){
            $result=new exam();
            
            $result->Id=intval($dbItem[0]);
            $result->Name=$dbItem[1];

            return $result;
        }

    }

?>