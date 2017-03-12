ngControllers["authCtrl"]=function($rootScope,$location, httpSvc, authService){
    var _self=this;
    
    _self.ctor=function(){
        _self.auth();
    };

    _self.login=function(target){
        httpSvc.login(_self.credentials).then(function(response){
            $rootScope.profile=response;
            
            if($rootScope.profile && $rootScope.profile.id){
                $rootScope.$emit('closeModal');

                // if(httpSvc.cameFrom){
                //     // $location.path(httpSvc.cameFrom);
                // }

                // $location.path(target);
            }
            return;
            
        });
        // $location.path(target);

    };

    _self.auth=function(){
        authService.getProfile().then(function(response){
            $rootScope.profile=response;
        });

    }

    _self.ctor();


    $rootScope.$on('closeModal', function(event, args) {
        angular.element('#myModal').modal('hide');
    });

    $rootScope.$on('myModalOpen',function(even,args){
        angular.element('#myModal').modal('show');
        // let modal = document.getElementById('myModalOpen');
        // if(modal){
        //     modal.click();
        //     return;
        // }
        return;
    });

    $rootScope.$on('unauthorized', function(event, args) {

        // httpSvc.cameFrom=$location.path();
        // $location.path("/");
        $rootScope.$emit('myModalOpen');
        // _self.closeModal();
        // do what you want to do
    });
};