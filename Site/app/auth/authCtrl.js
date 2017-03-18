// ngControllers["authCtrl"]=function($rootScope,$scope,$location, httpSvc, authService){
    
//     $scope.ctor=function(){
//         $scope.auth();
//     };

//     $scope.toggle=function(show, parent){
//         $scope.show=!show;
//     }

//     $scope.login=function(target){
//         httpSvc.login($scope.credentials).then(function(response){
//             $rootScope.profile=authService.createProfile(response);
            
//             if($rootScope.profile && $rootScope.profile.id){
//                 $rootScope.$emit('closeModal');

//                 if(httpSvc.cameFrom){
//                     $location.path(httpSvc.cameFrom);
//                 }

//                 $location.path(target);
//             }
//             return;
            
//         });
//         // $location.path(target);

//     };

//     $scope.auth=function(){
//         authService.getProfile().then(function(response){
//             $rootScope.profile=response;
//         });

//     }

//     $scope.ctor();


//     $rootScope.$on('closeModal', function(event, args) {
//         angular.element('#myModal').modal('hide');
//     });

//     $rootScope.$on('myModalOpen',function(even,args){
//         angular.element('#myModal').modal('show');
//         // let modal = document.getElementById('myModalOpen');
//         // if(modal){
//         //     modal.click();
//         //     return;
//         // }
//         return;
//     });

//     $rootScope.$on('unauthorized', function(event, args) {

//         // httpSvc.cameFrom=$location.path();
//         // $location.path("/");
//         $rootScope.$emit('myModalOpen');
//         // _self.closeModal();
//         // do what you want to do
//     });
// };