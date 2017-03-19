<?php
require_once ("ModelHelper.php");

    class dogSearch{

        function __construct($json){
            $this->Name=ModelHelper::jsonGet($json,"name");
            $this->LastName=ModelHelper::jsonGet($json,"lastName");
            $this->BirthFrom=ModelHelper::jsonGetDateTime($json,"birthFrom");
            $this->BirthTo=ModelHelper::jsonGetDateTime($json,"birthTo");
            $this->Male=ModelHelper::jsonGet($json,"male");
            $this->Chipnumber=ModelHelper::jsonGet($json,"chipnumber");
            $this->Booknumber=ModelHelper::jsonGet($json,"booknumber");
            $this->Breedable=ModelHelper::jsonGet($json,"breedable");

            $this->Formvalues=ModelHelper::jsonGet($json,"formvalues");
            $this->Exams=ModelHelper::jsonGet($json,"exams");
        }

        public $Name;
        public $LastName;
        public $BirthFrom;
        public $BirthTo;
        public $Male;
        public $Chipnumber;
        public $Booknumber;
        public $Breedable;
        
        public $Formvalues;
        public $Exams;
    }
?>