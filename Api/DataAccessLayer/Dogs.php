<?php
require_once("Sql.php");
require_once("./Models/Dog.php");

    class dogs{

        private $sql;

        function __construct()
        {
            $this->sql= new sql();
        }

        public function get($page,$size)
        {    

            try{
                $dogs= $this->getModels($page,$size);

                if(!is_array($dogs) || count($dogs)==0){
                    return null;
                }

                $result=$this->transformAll($dogs);
                return $result;
            }
            catch(exception $ex){
                return $ex;
            }
        }

        public function getId($id)
        {
            $dogModel= $this->getModel($id);

            $result=$this->transform($dogModel);
            
            return $result;
        }

        public function search($search,$page,$size){
            if(!isset($search)){
                return null;
            }

            $dogs=$this->searchModels($search,$page,$size);
            
            if(!is_array($dogs) || count($dogs)==0){
                    return null;
            }

            $result=$this->transformAll($dogs);
            return $result;
        }

        public function getByKennel($id){

            $models= $this->getModelsByKennel($id);

            $result =$this->transformAll($models);

            return $result;
        }

        public function create($dog)
        {

        }

        public function update($id,$dog)
        {
            
        }

        //=====

        private function getModels($page,$size)
        {
            $query="select * from v_dogs_kennels";

            $dogs= $this->sql->queryPaged($query,$page,$size);
            
            return $dogs;
        }

        private function getModel($id){
            if(!is_int($id)){
                return null;
            }

            $dogs= $this->sql->query("select * from dogs where id={$id}");

            if($dogs==null || sizeof($dogs)!=1){
                return null;
            }

            return $dogs[0];
        }

        private function getModelsByKennel($id){
            if(!is_int($id)){
                return null;
            }

            $dogs= $this->sql->query("select * from v_dogs_kennels where kennel_id={$id}");

            if($dogs==null || sizeof($dogs)==0){
                return null;
            }

            return $dogs;
        }

        private function searchModels($search,$page,$size){

            $query="select * from v_dogs_kennels";

            $query.=$this->isSimilar($search);

            $dogs= $this->sql->queryPaged($query,$page,$size);

            if($dogs==null || sizeof($dogs)==0){
                return null;
            }

            return $dogs;
        }

        private function transformAll($dogs){
            $result=array();
            foreach($dogs as $dog){
                array_push($result,$this->transform($dog));
            }
            return $result;
        }

        private function transform($dbItem){
            $result=new dog();
            
            $result->Id=intval($dbItem[0]);
            $result->Name=$dbItem[1];
            $result->Birth= $dbItem[2]!=null? \DateTime::createFromFormat("Y-m-d",$dbItem[2],new \DateTimeZone('UTC')):null;
            $result->Male=boolval($dbItem[3]);
            $result->Chipnumber=$dbItem[4];
            $result->FormvalueId=intval($dbItem[5]);
            $result->Booknumber=$dbItem[6];
            $result->Breedable=boolval($dbItem[7]);
            $result->LastName=$dbItem[8];

            return $result;
        }

        private function isSimilar($search){
            $sql="";

            if(isset($search->Name)){
                $sql=$this->sql->sqlLike($sql,"dog_name",$search->Name);
            }

            if(isset($search->LastName)){
                $sql=$this->sql->sqlLike($sql,"kennel_name",$search->LastName);
            }

            if(isset($search->Male)){
                if($search->Male==true){
                    $sql=$this->sql->sqlIs($sql,"dog_male",1);
                }else{
                    $sql=$this->sql->sqlIs($sql,"dog_male",0);
                }

            }

            if(isset($search->Breedable)){
                if($search->Breedable==true){
                    $sql=$this->sql->sqlIs($sql,"dog_breedable",1);
                }else{
                    $sql=$this->sql->sqlIs($sql,"dog_breedable",0);
                }

            }

            if(isset($search->BirthFrom)){
                $sql=$this->sql->sqlAfter($sql,"dog_male",$search->BirthFrom);
            }

            if(isset($search->BirthTo)){
                $sql=$this->sql->sqlBefore($sql,"dog_male",$search->BirthTo);
            }

            if(isset($search->Formvalues) && is_array($search->Formvalues) && array_count_values($search->Formvalues)>0){
                $sql=$this->sql->sqlContains($sql,"dog_formvalue_id",$search->Formvalues);
            }

            if($sql!=""){
                $sql=" WHERE {$sql}";
            }

            return $sql;
        }

    }

?>