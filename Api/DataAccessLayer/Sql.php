<?php
namespace DataAccessLayer{   
    class sql
    {

        private $connection;


        public function query($sql, $page=0, $size=0){
            
            if($page==0)
            {
                $page=1;
            }
            $page=($page-1)*$size;

            if($size!=0){
                $sql .=" limit {$page},{$size}";
            }

            try{
                $this->open();

                $result=array();

                if ($rows = $this->connection->query($sql)) {
                    
                    $first_row = true;
                    while ($row = mysqli_fetch_row($rows)) {
                        if ($first_row) $first_row = false;
                        
                        array_push($result,$row);

                    }

                    return $result;
                }

            }catch(exception $ex){

            }finally{
                $this->close();
            }

        }

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
    }
}
?>