<?php

$method =$_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        try{
            $result=[];
            echo json_encode($result);
        }
        catch(exception $ex)
        {
            echo 'Exception abgefangen: ',  $ex->getMessage(), "\n";
        }

        break;
}

?>