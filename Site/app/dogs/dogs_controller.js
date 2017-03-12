ngControllers["dogs_controller"]=function($location, $scope, httpSvc, dog_service){
    let _self=this;


    _self.ctor=function(){
        _self.route=$location.path();
        _self.route=_self.route.split("/");
        _self.route=_self.route[_self.route.length-1];

        httpSvc.getConfig(_self.route).then(function(response){
            _self.config=response;
            _self.paging=_self.config.table.paging;
            _self.loadItems();
        });
    };


    _self.loadItems=function(){
        dog_service.getDogs(_self.paging)
            .then(function(result){
                _self.items=result;
            });
    };

    _self.nextPage=function(){
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

    _self.prevPage=function(){
        if(!_self.paging){
            _self.paging={};
        }

        if(_self.paging.page && _self.paging.page!=1){
            _self.paging.page--;
        }
        _self.loadItems();
    };

    // $scope.$on('unauthorized', function(event, args) {

    //     console.log("unauthorized");
    //     httpSvc.cameFrom=$location.path();
    //     $location.path("/");
    //     document.getElementById('myModalOpen').click();
    // // do what you want to do
    // });


    _self.ctor();
}