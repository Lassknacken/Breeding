(function(){
'use strict'

var myApp=angular.module('myApp',['ngRoute']);


for(var key in ngControllers){
    myApp.controller(key, ngControllers[key]);
}

for(var key in ngServices){
    myApp.service(key, ngServices[key]);
}

for(var key in ngDirectives){
    myApp.directive(key, ngDirectives[key]);
}

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/site/templates/home.htm"
    }).when("/dogs", {
        templateUrl : "/site/templates/dogs.htm"
    }).when("/wurst", {
        templateUrl : "/site/templates/wurst.htm"
    }).when("/edit_modus", {
        templateUrl : "/site/templates/edit_modus.htm"
    }).when("/dogs", {
        templateUrl : "/site/templates/table/list.htm"
    }).when("/dogs/:id", {
        templateUrl : "/site/templates/detail/detail.htm"
    }).when("/register", {
        templateUrl : "/site/templates/registration.htm"
    }).when("/area", {
        templateUrl : "/site/templates/area.htm"
    }).when("/profil", {
        templateUrl : "/site/templates/profil.htm"
    });
});

myApp.filter('unsafe', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);

myApp.controller('PopoverDemoCtrl', ['$scope',function ($scope) {
  $scope.dynamicPopover = "Hello, <b>World!</b>";
}]);

angular.module("template/popover/popover.html", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("template/popover/popover.html",
      "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
      "  <div class=\"arrow\"></div>\n" +
      "\n" +
      "  <div class=\"popover-inner\">\n" +
      "      <h3 class=\"popover-title\" ng-bind-html=\"title | unsafe\" ng-show=\"title\"></h3>\n" +
      "      <div class=\"popover-content\"ng-bind-html=\"content | unsafe\"></div>\n" +
      "  </div>\n" +
      "</div>\n" +
      "");
}]);


})(window.angular)