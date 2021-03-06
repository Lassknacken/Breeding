<?php
require_once("Sql.php");
require_once("./Models/Formvalue.php");

    class formvalues{

        private $sql;

        function __construct()
        {
                $this->sql= new sql();
        }

        public function get($page,$size)
        {    

            try{
                $models= $this->getModels($page,$size);

                $result=$this->transformAll($models);
                return $result;
            }
            catch(exception $ex){
                return $ex;
            }
        }

        public function getId($id)
        {
            $model= $this->getModel($id);

            $result=$this->transform($model);
            
            return $result;
        }

        public function create($model)
        {

        }

        public function update($id,$model)
        {
            
        }

        //=====

        private function getModels($page,$size){
            $query="select * from formvalues;";
          
            $models= $this->sql->queryPaged($query,$page,$size);

            return $models;
        }

        private function getModel($id){
            if(!is_int($id)){
                return null;
            }

            $models= $this->sql->query("select * from formvalues where id={$id}");

            if($models==null || sizeof($models)!=1){
                return null;
            }

            return $models[0];
        }

        private function transformAll($items){
            $result=array();
            foreach($items as $item){
                array_push($result,$this->transform($item));
            }
            return $result;
        }

        private function transform($dbItem){
            $result=new formvalue();
            
            $result->Id=intval($dbItem[0]);
            $result->Name=$dbItem[1];

            return $result;
        }

    }
?>