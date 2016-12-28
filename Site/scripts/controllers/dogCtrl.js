ngControllers["dogCtrl"]=function(httpSvc){
    var _self=this;

    _self.ctor=function(){
        httpSvc.getFormvaules().then(function(result){
            _self.formvalues=result;
        });
    };

    _self.ctor();
    
};