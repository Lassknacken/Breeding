<?php
namespace dataAccessLayer{   
    class sql
    {

        public $connection;

        public function open()
        {
            $servername = "192.168.178.23";
            $username = "root";
            $password = "ByZsql1988";
            $dbname = "homezone";

            try{
                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);
                // Check connection
                if ($conn->connect_error) 
                {
                    die("Connection failed: " . $conn->connect_error);
                }

                $this->connection=$conn;
            }
            catch(exception $ex)
            {
                echo "Sql.php->Open:".$ex;
            }
        }

        public function query($sql){

        }
    }
}
?>