'use strict';

angular.module('perso')
  .controller('HomeCtrl', function ($window) {

    var vm = this;


    TweenLite.defaultEase = Power0.easeNone;

    var busAnim = null;
    var planeAnim = null;
    var plane = $('#plane');
    var bus = $('#bus');

    function draw() {
      if (busAnim) {
        busAnim.kill();
      }
      if (planeAnim) {
        planeAnim.kill();
      }
      var width = window.innerWidth;
      planeAnim = new TimelineMax({ repeat: -1 });

      planeAnim
        .set(plane, { x: 500 })
        .to(plane, 10, {x:  -width});

      busAnim = new TimelineMax({ repeat: -1 });

      busAnim
        .set(bus, { x: 0 })
        .to(bus, 10, {x: width + 250});
    }

    draw();


    $(window).resize(draw);

    angular.extend(vm, {
    });

  });
