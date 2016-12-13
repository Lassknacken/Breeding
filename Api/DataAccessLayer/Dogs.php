<?php
namespace dataAccessLayer{
    class dogs{

        private $sql;

        private function ctor()
        {
            $sql= new dataAccessLayer\sql();
            
        }

        public function get()
        {    
            ctor();

            try{
                $sql->open();


            }
            catch(exception $ex){

            }
            




        }

        public function get_id($id)
        {

        }

        public function create($dog)
        {

        }

        public function update($id,$dog)
        {
            
        }

    }
}

?>