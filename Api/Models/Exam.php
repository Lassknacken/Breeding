<?php
require_once ("ModelHelper.php");
    class exam{
        function __construct($json=null){
            if($json==null){
                return;
            }
            $this->Id=ModelHelper::jsonGet($json,"id");
            $this->Name=ModelHelper::jsonGet($json,"name");        
        }

        public $Id;
        public $Name;
    }
?>