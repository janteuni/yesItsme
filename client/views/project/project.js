'use strict';

angular.module('perso')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project', {
        templateUrl: 'views/project/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'vm'
      });
  });
