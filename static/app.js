var app = angular.module('myApp', ['ui.bootstrap', 'ngRoute']);

app.config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/upload', {
        template: '<upload></upload>'
      })
      .when('/show/:name', {
        template: 'view!'
      })
      .when('/edit', {
        template: '<editor></editor>'
      })
      .when('/',{
        template: 'home'
      })
      .otherwise({
        template: 'not found'
      });
  }]);
