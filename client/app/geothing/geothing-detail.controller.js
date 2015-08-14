'use strict';

angular.module('geoTestApp')
  .controller('GeothingDetailCtrl', function ($scope, $http, $stateParams) {
    $scope.message = 'Hello from the Detail Controller';

    $scope.id = $stateParams.id;
    $scope.geothing = {};

		$http.get('/api/geothings/' + $scope.id).success(function(geothing) {
			$scope.geothing = geothing;

		}).
    error(function(e) {
      handleError(e);
    });
  });
