(function(){
'use strict'

var myApp=angular.module('myApp',['ngRoute']);


for(var key in ngControllers){
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
    }).when("/edit_modus", {
        templateUrl : "/site/templates/edit_modus.htm"
    }).when("/list", {
        templateUrl : "/site/templates/list.htm"
    })
});

})(window.angular)