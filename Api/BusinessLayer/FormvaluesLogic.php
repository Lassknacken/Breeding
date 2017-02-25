<?php
    require('./DataAccessLayer/Formvalues.php');


    class formvaluesLogic{

        private $dal;

        function __construct(){
            $this->dal=new formvalues();
        }

        public function get($page,$size)
        {
            $dogs=$this->dal->get($page,$size);

            return $dogs;
        }

        public function getId($id){
            $formvalue= $this->dal->getId($id);
            
            return $formvalue;
        }
    }
?>