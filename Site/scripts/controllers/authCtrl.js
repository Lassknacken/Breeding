ngControllers["authCtrl"]=function($location, httpSvc){
    var _self=this;
    
    _self.ctor=function(){
    };

    _self.login=function(target){
        httpSvc.login(_self.credentials).then(function(response){
            httpSvc.csrf=response;
            if(httpSvc.csrf){
                document.getElementById('myModalClose').click();
                if(httpSvc.cameFrom){
                    $location.path(httpSvc.cameFrom);
                }

                $location.path(target);
            }
            
        })
        // document.getElementById('myModalClose').click();
        // $location.path(target);

    };

    _self.ctor();

};