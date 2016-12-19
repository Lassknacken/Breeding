(function(){
'use strict'

var myApp=angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/site/templates/home.htm"
    })
});

})(window.angular)