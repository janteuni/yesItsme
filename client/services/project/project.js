'use strict';

angular.module('perso')
  .factory('Project', function ($q) {

    var projects = [
      {
        slug: "sushi-icon",
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
        var len = projects.length;
        var i = 0;
        var found = false;
        var deferred = $q.defer();

        for (; i < len; i++) {
          if (projects[i].slug == slug) {
            found = true;
            deferred.resolve(projects[i]);
          }
        }
        if (!found) {
          console.log('Not found');
          deferred.reject(404, "nonon");
        }
        return deferred.promise;
      }
    };

  });
