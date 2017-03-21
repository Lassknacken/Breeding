ngDirectives['exams']= function (exam_service) {

        return {
            restrict: "E",
            replace: true,
            scope: {
                model:'=ngModel',
                addable:"="
            },
            templateUrl: 'app/exams/exams.htm',
            // require: 'ngModel',
            link:function($scope, $element, $attr){
                exam_service.getExams().then(function(result){
                    $scope.exams=result;
                });
            }
        };
};