<?php

$method =$_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        try{
            //$test= file_get_contents('/etc/crontab');
            $result=[];
            $test= exec('sudo crontab -l -u pi',$result);//$test;
            echo json_encode($result);
        }
        catch(exception $ex)
        {
            echo 'Exception abgefangen: ',  $ex->getMessage(), "\n";
        }

        break;
}

?>