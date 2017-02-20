<?php
namespace DataAccessLayer{
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

        public function getId($id)
        {
            $model= $this->getModel($id);

            $result=$this->transform($model);
            
            return $result;
        }

        public function create($item)
        {

        }

        public function update($id,$item)
        {
            
        }

        //=====

        private function getModels($page,$size){
            $query="select * from users";
            $users= $this->sql->query($query,$page,$size);
            
            return $users;
        }

        private function getModel($id){
            if(!is_int($id)){
                return null;
            }

            $users= $this->sql->query("select * from users where id={$id}");

            if($users==null || sizeof($users)!=1){
                return null;
            }

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
            $result=new \models\user();
            
            $result->Id=intval($dbItem[0]);
            $result->Username=$dbItem[1];
            //password[2]
            $result->Email=$dbItem[3];
            $result->Name=$dbItem[4];
            $result->FamilyName=$dbItem[5];

            return $result;
        }

    }
}
?>