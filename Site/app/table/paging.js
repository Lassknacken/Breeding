ngDirectives['mypaging']= function () {
    return {
        // controller:function($scope,$location){
        //     $scope.redirect=function(){
        //         $location.path($scope.target.split('$').join($scope.model));
        //     }
        // },
        restrict: "E",
        replace: true,
        // scope: {
        //     model: "=ngModel",
        //     target:"=",
        //     title:"<",
        //     suffix:"<",
        //     tooltip:"<",
        //     design:"<"
        // },
        templateUrl: 'app/table/paging.htm'
    };
}