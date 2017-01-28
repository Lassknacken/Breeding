ngControllers["dog_controller"]=function($rootScope,$routeParams, dog_service){
    let _self=this;

    _self.ctor=function(){
        _self.loadDog($routeParams.id,true);
    };

    _self.loadDog=function(id,full){
        dog_service.getDog(id,full).then(function(result){
            _self.dog=result;

        });
    };

    _self.saveDog=function(){
        if(_self.dog.id==undefined || _self.dog.id===0 ){
            dog_service.postDog(_self.dog).then(function(result){
                _self.loadDog(result);
            });
        }else{
            dog_service.putDog(_self.dog.id,_self.dog);
        }
    };

    _self.ctor();
    
};