ngControllers["dogs_controller"]=function($location, $rootScope,$scope, httpSvc, dog_service,authService){
    let _self=this;


    _self.ctor=function(){
        if(!$rootScope.profile || !$rootScope.profile.id){
            authService.cameFrom=$location.path();
            $rootScope.$emit("unauthorized");
            return;
        }
        
        _self.loadItems();
    };


    _self.loadItems=function(){
        if(!_self.paging){
            _self.paging={
                page:1,
                size:20,
            }
        }

        dog_service.getDogs(_self.paging)
            .then(function(result){
                $scope.items=result;
            });
    };

    $scope.nextPage=function(){
        if(!_self.paging){
            _self.paging={};
        }

        if(!_self.paging.page){
            _self.paging.page=2;
        }else{
            _self.paging.page++;
        }

        if(!_self.paging.size){
            _self.paging.size=20;
        }
        _self.loadItems();
    };

    $scope.prevPage=function(){
        if(!_self.paging){
            _self.paging={};
        }

        if(_self.paging.page && _self.paging.page!=1){
            _self.paging.page--;
        }
        _self.loadItems();
    };

    _self.ctor();
}