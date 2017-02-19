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
        templateUrl : "/site/app/home.htm"
    }).when("/register", {
        templateUrl : "/site/app/registration.htm"
    }).when("/area", {
        templateUrl : "/site/app/area.htm"
    }).when("/profil", {
        templateUrl : "/site/app/profil.htm"
    }).when("/dogs", {
        templateUrl : "/site/app/table/list.htm",
        controller:"dogs_controller",
        controllerAs: "listController"
    }).when("/dogs/:id", {
        templateUrl : "/site/app/dogs/detail.htm",
        controller:"dog_controller",
        controllerAs: "dogCtrl"
    }).when("/dogs/create", {
        templateUrl : "/site/app/dogs/create.htm",
        controller:"dog_controller",
        controllerAs: "dogCtrl"
    }).when("/dogs/:id/edit", {
        templateUrl : "/site/app/dogs/edit.htm",
        controller:"dog_controller",
        controllerAs: "dogCtrl"
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