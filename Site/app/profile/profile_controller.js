ngControllers["profile_controller"]=function($rootScope, profile_service,authService){
    let _self=this;

    _self.ctor=function(){
        if(!$rootScope.profile || !$rootScope.profile.id){
            $rootScope.$emit("unauthorized");
        }else{
            _self.loadProfile($rootScope.profile.id);
        }
    };

    _self.loadProfile=function(id){
        
        profile_service.getProfile(id,true).then(function(response){
            _self.profile=response;
        });
    };

    _self.saveDog=function(){
        // if(_self.dog.id==undefined || _self.dog.id===0 ){
        //     dog_service.postDog(_self.dog).then(function(result){
        //         _self.loadDog(result);
        //     });
        // }else{
        //     dog_service.putDog(_self.dog.id,_self.dog);
        // }
    };

    _self.ctor();
    
};