var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .when("/login", {
        templateUrl : "views/signInForm.html"
    })
    .when("/green", {
        templateUrl : "green.html"
    })
    .when("/blue", {
        templateUrl : "blue.html"
    });
});

var controller = app.controller('ctrl', function ($scope, $location){
    $scope.changeLocToSignIn = function (){
        console.log($location.path());
        $location.path("/login");
        console.log($location.path());
    };
});
