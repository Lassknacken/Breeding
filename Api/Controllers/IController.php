<?php
    interface iController{

        public function get($page,$size);

        public function getId($id,$full);
        
        public function put($id,$item);

        public function post($item,$page,$size);
    }
?>