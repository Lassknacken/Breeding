ngControllers["authCtrl"]=function($location, httpSvc){
    var _self=this;
    
    _self.ctor=function(){
        console.log("test");
    };

    _self.login=function(){
        console.log("test2");
        httpSvc.login(_self.credentials).then(function(response){
            httpSvc.csrf=response;
            if(httpSvc.csrf){
                document.getElementById('myModalClose').click();
                if(httpSvc.cameFrom){
                    $location.path(httpSvc.cameFrom);
                }
            }
        })

    };
    _self.test=function(){
        console.log("test3");
    }

    _self.ctor();

};