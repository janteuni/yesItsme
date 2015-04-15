'use strict';

angular.module('perso', [
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');


  })
  .run(function($rootScope, $location){
    $rootScope.$on('notFound', function(){
      $location.path('/');
    });
  });
