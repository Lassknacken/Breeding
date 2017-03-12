ngControllers["kennelController"]=function($rootScope, $routeParams, authService, kennelService){
    let _self=this;

    _self.ctor=function(){
        if(!$rootScope.profile || !$rootScope.profile.id){
            $rootScope.$emit("unauthorized");
        }

        if($routeParams.id){
            _self.loadKennel($routeParams.id);
        }
    };

    _self.loadKennel=function(id){
        
        kennelService.getKennel(id,true).then(function(response){
            _self.kennel=response;
        });
    };

    _self.saveKennel=function(){
    };

    _self.ctor();
    
};