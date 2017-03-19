ngDirectives['formvalues']= function (formvalue_service) {

        return {
            restrict: "E",
            replace: true,
            scope: {
                val:'=ngModel'
            },
            templateUrl: 'app/formvalues/formvaluesSelect.htm',
            // require: 'ngModel',
            link:function($scope, $element, $attr){
                
                formvalue_service.getFormvaules().then(function(result){
                    $scope.formvalues=result;
                });         

            }
        };
};