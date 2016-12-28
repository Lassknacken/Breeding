ngControllers["listCtrl"]=function($location,httpSvc){
    var _self=this;


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
        httpSvc[sourceName]().then(function(result){
            _self.items=result;
        });

    };


    _self.ctor();
}