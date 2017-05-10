var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .when("/login", {
        templateUrl : "views/signInForm.html"
    });
});

var controller = app.controller('ctrl', function ($scope, $location, $http){
    $scope.changeLocToSignIn = function (){
        console.log($location.path());
        $location.path("/login");
        console.log($location.path());
    };
    $scope.submitSignIn = function (){
        console.log("Trying to get data from server");
        $http({
            method: 'GET',
            url: 'loginServlet?signName='+$scope.signName+'&signPassword='+$scope.signPassword
            }).then(function successCallback(response) {
              console.log(response.data);
            }, function errorCallback(response) {
              console.log('Something went wrong!');
            });
        };
});
