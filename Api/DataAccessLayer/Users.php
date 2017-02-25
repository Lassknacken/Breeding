<?php
require_once("Sql.php");
require("./Models/User.php");

    class users{

        private $sql;

        function __construct()
        {
            $this->sql= new sql();
        }

        public function get($page,$size)
        {    

            try{
                $users= $this->getModels($page,$size);

                $result=$this->transformAll($users);
                return $result;
            }
            catch(exception $ex){
                return $ex;
            }
        }

        public function getById($id)
        {
            $model= $this->getModel($id);

            if(isset($model)){
                return $model;
            }
            
            return null;
        }

        public function getByUsername($username)
        {
            $model= $this->getModelByUsername($username);

            $result=$this->transform($model);
            
            return $result;
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
            return $users[0];
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

            return $result;
        }

    }
?>