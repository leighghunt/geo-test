'use strict';

angular.module('geoTestApp')
  .controller('GeothingCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';
    $scope.geothings = [];

	  $http.get('/api/geothings/' ).success(function(geothings) {
	    $scope.geothings = geothings;

      socket.syncUpdates('geothing', $scope.geothings);

	  }).
	  error(function(e) {
	    handleError(e);
	  });

    $scope.addGeothing = function () {
        if ($scope.newGeothing === '') {
            return;
        }
        $http.post('/api/geothings', { name: $scope.newGeothing });
        $scope.newGeothing = '';
    };
    $scope.deleteGeothing = function (geothing) {
        $http.delete('/api/geothings/' + geothing._id);
    };
    $scope.$on('$destroy', function () {
        socket.unsyncUpdates('geothing');
    });

  });
