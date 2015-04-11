'use strict';

angular.module('perso')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project/:slug', {
        templateUrl: 'views/project/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'vm',
        resolve: {
          project: function (Project, $route) {
            return Project.getOne($route.current.params.slug);
          }
        }
      });
  });
