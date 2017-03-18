ngControllers["kennelController"]=function($rootScope, $routeParams,$location, authService, kennelService){
    let _self=this;

    _self.ctor=function(){
        if(!$rootScope.profile || !$rootScope.profile.id){
            authService.cameFrom=$location.path();
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