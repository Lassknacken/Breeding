<?php
    class sql
    {

        private $connection;

        public function query($sql){

            return $this->runQuery($sql);

        }

        public function queryPaged($sql, $page,$size){
            if($page==0)
            {
                $page=1;
            }
            $page=($page-1)*$size;

            if($size!=0){
                $sql .=" limit {$page},{$size}";
            }

            return $this->runQuery($sql);
        }

        //comparer
        public function sqlLike($sql, $name,$value){

            $sql=$this->sqlCombine($sql,"AND");
            return $sql."{$name} like '%{$value}%'";
        }

        public function sqlIs($sql, $name,$value){
            $sql=$this->sqlCombine($sql,"AND");
            return $sql."{$name} = {$value}";
        }

        public function sqlAfter($sql,$name,$value){
            if(!isset($value) || !isset($value->date)){
                return $sql;
            }
            $sql=$this->sqlCombine($sql,"AND");


            return $sql."{$name} >= date('{$value->date}')";
        }

        public function sqlBefore($sql,$name,$value){
            if(!isset($value) || !isset($value->date)){
                return $sql;
            }

            $sql=$this->sqlCombine($sql,"AND");
            return $sql."{$name} <= date('{$value->date}')";
        }

        public function sqlContains($sql,$name,$values){
            if(!isset($values) || !is_array($values) || sizeof($values)==0){
                return $sql;
            }
            
            $sql=$this->sqlCombine($sql,"AND");

            $value=implode(",",$values);
            if(is_numeric(($values[0]))){
                return $sql."{$name} in({$value})";
            }

            return $sql;
        }


        public function sqlSet($sql, $name,$value){
            if(!isset($name)|| !isset($value)){
                return $sql;
            }

            $sql=$this->sqlCombine($sql,",");
            
            if(is_numeric($value)){
                return $sql." {$name}={$value}";
            }else if(is_string($value)){
                return $sql." {$name}='{$value}'";
            }
            return $sql;
        }

        //=====
        private function open()
        {
            $servername = "192.168.178.23";
            $username = "root";
            $password = "ByZsql1988";
            $dbname = "Breeding";

            try{
                // Create connection
                $this->connection = new \mysqli($servername, $username, $password, $dbname);
                // Check connection
                if ($this->connection->connect_error) 
                {
                    die("Connection failed: " . $this->connection->connect_error);
                }

                mysqli_set_charset($this->connection, "utf8");
            }
            catch(exception $ex)
            {
                echo "Sql.php->Open:".$ex;
            }
        }

        private function close(){
            $this->connection->close();
        }

        private function runQuery($sql){
            try{
                $this->open();

                $result=array();

                if ($rows = $this->connection->query($sql)) {
                    

                    if(is_bool($rows)){
                        return $rows;
                    }

                    $first_row = true;
                    while ($row = mysqli_fetch_row($rows)) {
                        if ($first_row) $first_row = false;
                        
                        array_push($result,$row);
                    }

                    return $result;
                }

            }catch(exception $ex){

            }finally{
                // $this->close();
                $this->connection->close();
            }
        }

        private function sqlCombine($sql,$separator){
            if($sql!=""){
                return $sql.=" {$separator} ";
            }
            return "";
        }
    }
?>