var app = angular.module("miktov2", ['ngRoute','ui.bootstrap']);


app.config(['$routeProvider',
  function($routeProvider){


    $routeProvider
     .when('/home',{
        templateUrl : "data/partials/home.html",
        controller : "mainCtrl"
      })
    .otherwise({
      redirectTo: '/home'
    });
 
  }
  ]);