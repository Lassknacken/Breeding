ngDirectives['formvalue']= function (formvalue_service) {

        return {
            restrict: "E",
            replace: true,
            scope: {
                val:'='
            },
            templateUrl: 'app/formvalues/formvalue.htm',
            // require: 'ngModel',
            link:function($scope, $element, $attr){
                
                $scope.selected=function(){
                    $scope.val=$scope.formvalue;
                }

                formvalue_service.getFormvaules().then(function(result){
                    $scope.formvalues=result;
                    
                    if(!$scope.val){
                        return;
                    }
                    for(let key in $scope.formvalues){
                        if($scope.formvalues[key].id===$scope.val.id){
                            $scope.formvalue=$scope.formvalues[key];
                        }
                    }
                });         

            }
        };
};