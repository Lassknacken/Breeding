ngDirectives['cell']= function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            val: "=",
            template: "="
        },
        templateUrl: 'templates/table/cell.htm'
    };
};