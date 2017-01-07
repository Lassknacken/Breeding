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
    });
});

})(window.angular)