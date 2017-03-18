(function(){
'use strict'

var myApp=angular.module('myApp',['ngRoute','ngCookies']);


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
        templateUrl : "/site/app/profile/detail.htm",
        controller:"profile_controller",
        controllerAs:"profileCtrl"
    }).when("/kennels/:id", {
        templateUrl:"/site/app/kennels/detail.htm",
        controller:"kennelController",
        controllerAs:"kennelCtrl"
    }).when("/dogs", {
        templateUrl : "/site/app/dogs/list.htm",
        controller:"dogs_controller",
        controllerAs: "listController"
    }).when("/dogs/:id", {
        templateUrl : "/site/app/dogs/detail.htm",
        controller:"dog_controller",
        controllerAs: "dogCtrl"
    }).when("/dogs/:id/pairing", {
        templateUrl : "/site/app/pairing/list.htm",
        controller:"dogs_controller",
        controllerAs: "dogsCtrl"
    }).when("/dogs/create", {
        templateUrl : "/site/app/dogs/create.htm",
        controller:"dog_controller",
        controllerAs: "dogCtrl"
    })
    ;
});

myApp.filter('unsafe', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);

myApp.controller('PopoverDemoCtrl', ['$scope',function ($scope) {
  $scope.dynamicPopover = "Hello, <b>World!</b>";
}]);

angular.module("template/popover/popover.htm", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("template/popover/popover.htm",
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