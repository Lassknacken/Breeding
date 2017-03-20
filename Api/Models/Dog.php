<?php
require_once ("ModelHelper.php");
require_once ("Formvalue.php");

    class dog{

        function __construct($json=null){
            if($json==null){
                return;
            }
            $this->Name=ModelHelper::jsonGet($json,"name");
            $this->LastName=ModelHelper::jsonGet($json,"lastName");
            $this->Birth=ModelHelper::jsonGetDateTime($json,"birth");
            $this->Male=ModelHelper::jsonGet($json,"male");
            $this->Chipnumber=ModelHelper::jsonGet($json,"chipnumber");
            $this->Booknumber=ModelHelper::jsonGet($json,"booknumber");
            $this->Breedable=ModelHelper::jsonGet($json,"breedable");

            $this->Formvalue=new formvalue(ModelHelper::jsonGet($json,"formvalue"));
        }


        public $Id;
        public $Name;
        public $LastName;
        public $Birth;
        public $Male;
        public $Chipnumber;
        public $FormvalueId;
        public $Booknumber;
        public $Breedable;

        public $Formvalue;
        public $Exams;
    }
?>