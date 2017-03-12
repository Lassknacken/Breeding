<?php
require_once("Sql.php");
require_once("./Models/User.php");

    class users{

        private $sql;

        function __construct()
        {
            $this->sql= new sql();
        }

        public function get($page,$size)
        {    

            try{
                $models= $this->getModels($page,$size);

                if(is_array($models) && count($models) >0 )
                {
                    return $this->transform($models);
                }
            
                return null;
            }
            catch(exception $ex){
                throw $ex;
            }
        }

        public function getById($id)
        {
            $model= $this->getModel($id);

            if(isset($model)){

                return $this->transform($model);
            }
            
            return null;
        }

        public function getByUsername($username)
        {
            $model= $this->getModelByUsername($username);

            if(isset($model)){

                return $this->transform($model);
            }
            
            return null;
        }

        public function getBySession($session){
            $model=$this->getModelBySession($session);

            if(isset($model)){

                return $this->transform($model);
            }
            
            return null;
            
        }

        public function getPassword($id){

            $model= $this->getModel($id);

            if(isset($model)){
                return $model[2];
            }

            return null;
        }

        public function create($item)
        {

        }

        public function update($id,$item)
        {
            
        }

        public function setSession($userId,$sesion){
            
            $query="update users set session='{$sesion}' where id={$userId};";

            return $this->sql->query($query,0,0);
            
        }

        //=====

        private function getModels($page,$size){
            $query="select * from users;";
            $users= $this->sql->queryPaged($query,$page,$size);
            
            return $users;
        }

        private function getModel($id){
            if(!is_int($id)){
                return null;
            }

            $users= $this->sql->query("select * from users where id={$id};",0,0);

            if($users==null || sizeof($users)!=1){
                return null;
            }

            return $users[0];
        }

        private function getModelByUsername($username){

            if(!isset($username)){
                return null;
            }

            $query="select * from users where username='{$username}';";

            $users= $this->sql->query($query,0,0);

            $test= count($users);

            if(count($users)==1){
                return $users[0];
            }else{
                return null;
            }
        }

        private function getModelBySession($session){

            if(!isset($session)){
                return null;
            }

            $query="select * from users where session='{$session}';";

            $users= $this->sql->query($query,0,0);

            if(count($users)==1){
                return $users[0];
            }else{
                return null;
            }
        }

        private function transformAll($items){
            $result=array();
            foreach($items as $item){
                array_push($result,$this->transform($item));
            }
            return $result;
        }

        private function transform($dbItem){
            $result=new user();
            
            $result->Id=intval($dbItem[0]);
            $result->Username=$dbItem[1];
            // $result->Password=$dbItem[2];
            $result->Email=$dbItem[3];
            $result->Name=$dbItem[4];
            $result->FamilyName=$dbItem[5];
            $result->Session=$dbItem[6];

            return $result;
        }

    }
?>