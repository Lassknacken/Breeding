<?php
require_once("Sql.php");
require_once("./Models/Kennel.php");

    class kennels{

        private $sql;

        function __construct()
        {
            $this->sql= new sql();
        }

        public function get($page,$size)
        {    

            try{
                $kennels= $this->getModels($page,$size);

                $result=$this->transformAll($kennels);
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

        public function getByUser($id){
            $models= $this->getModelsByUser($id);

            $result= $this->transformAll($models);

            return $result;
        }

        public function create($item)
        {

        }

        public function update($id,$item)
        {
            
        }

        //=====

        private function getModels($page,$size)
        {
            $query="select * from kennels";

            $kennels= $this->sql->queryPaged($query,$page,$size);
            
            return $kennels;
        }

        private function getModel($id){
            if(!is_int($id)){
                return null;
            }

            $kennels= $this->sql->query("select * from kennels where id={$id};");

            if($kennels==null || sizeof($kennels)!=1){
                return null;
            }

            return $kennels[0];
        }

        private function getModelsByUser($id){
            $query ="select kennel_id, kennel_name, kennel_active from v_users_kennels";
            $query.=" where kennel_id is not null;";

            $kennels= $this->sql->query($query);
            
            return $kennels;

        }

        private function transformAll($items){
            $result=array();

            if($items==null){
                return $result;
            }
            foreach($items as $item){
                array_push($result,$this->transform($item));
            }
            return $result;
        }

        private function transform($dbItem){
            $result=new kennel();
            
            $result->Id=intval($dbItem[0]);
            $result->Name=$dbItem[1];
            $result->Active=boolval($dbItem[2]);
            // $result->Birth= $dbItem[2]!=null? \DateTime::createFromFormat("Y-m-d",$dbItem[2],new \DateTimeZone('UTC')):null;
            // $result->Male=boolval($dbItem[3]);
            // $result->Chipnumber=$dbItem[4];
            // $result->FormvalueId=intval($dbItem[5]);
            // $result->Booknumber=$dbItem[6];
            // $result->Breedable=boolval($dbItem[7]);
            // $result->LastName=$dbItem[9];

            return $result;
        }

    }

?>