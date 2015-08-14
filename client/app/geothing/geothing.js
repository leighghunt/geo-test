'use strict';

angular.module('geoTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('geothing', {
        url: '/geothing',
        templateUrl: 'app/geothing/geothing.html',
        controller: 'GeothingCtrl'
      })
      .state('geothing-detail', {
        url: '/geothing/:id',
        templateUrl: 'app/geothing/geothing-detail.html',
        controller: 'GeothingDetailCtrl'
      });
  });