'use strict';

angular.module('perso')
  .controller('ProjectCtrl', function (project) {

    var vm = this;

    angular.extend(vm, {
      project: project
    });

  });
