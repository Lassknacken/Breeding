ngControllers["dogs_controller"]=function($location, $scope, httpSvc, dog_service){
    let _self=this;


    _self.ctor=function(){
        _self.route=$location.path();
        _self.route=_self.route.split("/");
        _self.route=_self.route[_self.route.length-1];

        httpSvc.getConfig(_self.route).then(function(response){
            _self.config=response;
            _self.loadItems(_self.config.table.source);
        });
    };


    _self.loadItems=function(sourceName){
        dog_service.getDogs()
            .then(function(result){
                _self.items=result;
            });

    };


    $scope.$on('unauthorized', function(event, args) {

        console.log("unauthorized");
        httpSvc.cameFrom=$location.path();
        $location.path("/");
        document.getElementById('myModalOpen').click();
    // do what you want to do
    });


    _self.ctor();
}