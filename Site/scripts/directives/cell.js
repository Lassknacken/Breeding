ngDirectives['cell']= function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            val: "=",
            template: "="
        },
        templateUrl: 'app/table/cell.htm'
    };
};