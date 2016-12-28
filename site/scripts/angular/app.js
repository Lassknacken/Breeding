var ngControllers=[];
var ngServices=[];
(function(){
'use strict'

var myApp=angular.module('myApp',['ngRoute']);


for(key in ngControllers){
    myApp.controller(key, ngControllers[key]);
}

for(key in ngServices){
    myApp.service(key, ngServices[key]);
}

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/site/templates/home.htm"
    }).when("/dogs", {
        templateUrl : "/site/templates/dogs.htm"
    }).when("/wurst", {
        templateUrl : "/site/templates/wurst.htm"
    })
});

})(window.angular)