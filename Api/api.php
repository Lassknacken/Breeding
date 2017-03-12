<?php
$method =$_SERVER['REQUEST_METHOD'];
//extract controller FileName to require
$controllername =explode(basename(__FILE__),$_SERVER['REQUEST_URI']);
$controllername =explode("?",$controllername[1]);
$requireString="./Controllers{$controllername[0]}Controller.php";

if (!file_exists($requireString)){
    header("HTTP/1.1 500 Internal Server Error");
    throw new Exception ($controllername[0].'Controller does not exist');
}else{
  require($requireString);
}

//create controller instance
$controller=new controller();

switch ($method) {
    case 'GET':{
        try{
            $result;

            if(isset($_GET["id"])){
                $id=$_GET["id"];

                if(isset($_GET["full"])){
                    $full=boolval($_GET["full"]);

                     $result=$controller->getId($id,$full);
                }else{
                    $result=$controller->getId($id,false);
                }                
            }else{
                //e.g.controller/
                $page=0;
                $size=0;

                if(isset($_GET["page"]))
                {
                    $page=intval($_GET["page"]);
                }

                if(isset($_GET["size"]))
                {
                    $size=intval($_GET["size"]);
                }

                $result=$controller->get($page,$size);
            }

            if(!isset($result)){
                return;
            }

            $resultJson= json_encode($result,JSON_UNESCAPED_UNICODE);
            // $test= json_last_error();

            echo $resultJson;
        }
        catch (AuthException $ex){
            header("HTTP/1.1 401 Unauthorized");
            // echo json_encode('Exception abgefangen: ',  $ex, "\n");
        }
        catch(exception $ex)
        {
            echo json_encode('Exception abgefangen: ',  $ex->getMessage(), "\n");
        }

        break;
    }
    case 'POST':{
        try{
            $post=json_decode(file_get_contents('php://input'), true);
            
            $result;

            if(isset($post)){
                $result = $controller->post($post);
            }else{

            }           

            echo json_encode($result);
        }
        catch (AuthException $ex){
            header("HTTP/1.1 401 Unauthorized");
            // echo json_encode('Exception abgefangen: ',  $ex, "\n");
        }
        catch(exception $ex)
        {
            echo 'Exception abgefangen: ',  $ex->getMessage(), "\n";
        }

        break;
    }
}

?>