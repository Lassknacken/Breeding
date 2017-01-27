<?php
namespace Controller{

    interface iController{

        public function get();

        public function getId($id,$full);
        
        public function put($id,$item);

        public function post($item);
    }
}
?>