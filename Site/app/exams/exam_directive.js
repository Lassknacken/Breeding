ngDirectives['exam']= function (exam_service) {

        return {
            restrict: "E",
            replace: true,
            scope: {
                model:'=ngModel'
            },
            templateUrl: 'app/exams/exam.htm',
            // require: 'ngModel',
            link:function($scope, $element, $attr){
                
                // $scope.selected=function(){
                //     $scope.val=$scope.val.id;
                // }

                exam_service.getExams().then(function(result){
                    $scope.exams=result;
                    // for(let key in $scope.exams){
                    //     if($scope.exams[key].id===$scope.val.id){
                    //         $scope.exam=$scope.exams[key];
                    //     }
                    // }
                });           

            }
        };
};