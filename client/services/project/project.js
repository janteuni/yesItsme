'use strict';

angular.module('perso')
  .factory('Project', function ($q, $rootScope) {

    var projects = [
      {
        slug: "sushi-icons",
        name: "Sushicons",
        desc: "hahahahahahaha hahahahaha"
      }
    ];

    return {
      /**
       * Get one project by its slug
       *
       * @param slug
       * @returns {Promise}
       */
      getOne: function (slug) {
        var deferred = $q.defer();

        var index = projects.map(function(el) {
          return el.slug;
        }).indexOf(slug);
        if (index === -1) {
          deferred.reject(404, "nonon");
          $rootScope.$emit('notFound');
        } else {
          deferred.resolve(projects[index]);
        }
        return deferred.promise;
      }
    };

  });
