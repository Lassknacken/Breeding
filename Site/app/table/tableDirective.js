ngDirectives['mytable']= function (httpSvc) {
    return {
        controller:function($scope){
            $scope.init=function(configname){
                httpSvc.getConfig(configname).then(function(response){
                    $scope.template=response;
                });
            }
        },
        restrict: "E",
        replace: false,
        scope: {
            model: "=ngModel",
            configname:"=configname",
            // template: "="
        },
        templateUrl: 'app/table/table.htm'
    };
};