'use strict';

angular.module('perso', [
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push('authInterceptor');


  })

  .factory('authInterceptor', function ($rootScope, $q, $location) {
    return {
      responseError: function (response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  });
