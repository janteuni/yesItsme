'use strict';

angular.module('perso')
  .controller('HomeCtrl', function ($window) {

    var vm = this;


    TweenLite.defaultEase = Power0.easeNone;

    var plane = $('#plane');
    var width = $window.innerWidth;
    var bus = $('#bus');
    var planeAnim = new TimelineMax({ repeat: -1 });

    planeAnim
      .to(plane, 10, {x: - width - 500});

    var busAnim = new TimelineMax({ repeat: -1 });

    busAnim
      .to(bus, 10, {x: width + 250});

    angular.extend(vm, {
    });

  });
