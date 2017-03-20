ngControllers["dogs_controller"]=function($location, $rootScope, $scope, $routeParams, httpSvc, dog_service,authService){
    let _self=this;


    _self.ctor=function(){
        if(!$rootScope.profile || !$rootScope.profile.id){
            authService.cameFrom=$location.path();
            $rootScope.$emit("unauthorized");
            return;
        }
        
        if($routeParams.id){
            dog_service.getDog($routeParams.id,true).then(function(result){
                $scope.searchobject.male=!result.male;
                $scope.searchobject.formvalues=result.formvalue!=undefined?[result.formvalue.id]:[];
                $scope.searchobject.breedable=true;
            }).then(function(){
                _self.loadItems($scope.searchobject);
            });
        }else{
            _self.loadItems();
        }

    };


    _self.loadItems=function(search){
        if(!_self.paging){
            _self.paging={
                page:1,
                size:20,
            }
        }

        dog_service.getDogs(_self.paging,search)
            .then(function(result){
                $scope.items=result;
            });
    };

    $scope.search=function(){
         _self.paging={
            page:1,
            size:20,
        }
        _self.loadItems(this.searchobject);
    }

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
        _self.loadItems(this.searchobject);
    };

    $scope.prevPage=function(){
        if(!_self.paging){
            _self.paging={};
        }

        if(_self.paging.page && _self.paging.page!=1){
            _self.paging.page--;
        }
        _self.loadItems(this.searchobject);
    };

    _self.ctor();
}