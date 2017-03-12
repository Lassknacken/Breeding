ngDirectives['cell']= function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            val: "=ngModel",
            template: "="
        },
        templateUrl: 'app/table/cell.htm'
    };
};