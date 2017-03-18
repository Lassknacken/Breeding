ngDirectives['myredirect']= function () {
    return {
        controller:function($scope,$location){
            $scope.redirect=function(){
                $location.path($scope.target.split('$').join($scope.model));
            }
        },
        restrict: "E",
        replace: false,
        scope: {
            model: "=ngModel",
            target:"=",
            title:"<",
            suffix:"<",
            tooltip:"<",
            design:"<"
        },
        templateUrl: 'app/table/redirect.htm'
    };
}