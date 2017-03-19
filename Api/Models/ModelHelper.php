<?php

 class ModelHelper{

    public static function jsonGet($json,$key){
        if(!isset($json) ||! isset($key)){
            return null;
        }

        if(isset($json[$key])){
            return $json[$key];
        }
    }

    public static function jsonGetDateTime($json,$key){
        $date=ModelHelper::jsonGet($json,$key);

        if(isset($date)){
            return new DateTime($date);
        }else{
            return null;
        }
    }
    
}

?>