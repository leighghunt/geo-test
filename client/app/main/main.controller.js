'use strict';
angular.module('geoTestApp')
    .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];
    $scope.geojson = {};
    $http.get('/api/things').success(function (awesomeThings) {
        $scope.awesomeThings = awesomeThings;
        for(var thingIndex=0;thingIndex<awesomeThings.length;++thingIndex)
        {
            var thing = $scope.awesomeThings[thingIndex];
            if(thing.loc){
                $scope.geojson = thing.loc;
                console.log($scope.geojson);
                break;
            }
        }
        socket.syncUpdates('thing', $scope.awesomeThings);
    });
    $scope.addThing = function () {
        if ($scope.newThing === '') {
            return;
        }
        $http.post('/api/things', { name: $scope.newThing });
        $scope.newThing = '';
    };
    $scope.deleteThing = function (thing) {
        $http.delete('/api/things/' + thing._id);
    };
    $scope.$on('$destroy', function () {
        socket.unsyncUpdates('thing');
    });
});
