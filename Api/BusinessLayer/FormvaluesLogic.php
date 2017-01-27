<?php
namespace BusinessLayer{
    require('./DataAccessLayer/Formvalues.php');


    class formvaluesLogic{

        private $dal;

        function __construct(){
            $this->dal=new \DataAccessLayer\formvalues();
        }

        public function get()
        {
            $dogs=$this->dal->get();

            return $dogs;
        }

        public function getId($id){
            $formvalue= $this->dal->getId($id);
            
            return $formvalue;
        }
    }
}
?>