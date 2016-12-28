ngControllers["dogsCtrl"]=function(httpSvc){
    var _self=this;

    _self.ctor=function(){
        httpSvc.getDogs().then(function(result){
            _self.dogs=result;
        });
    };

    _self.ctor();
    
};