'use strict';

describe('Controller: GeothingCtrl', function () {

  // load the controller's module
  beforeEach(module('geoTestApp'));

  var GeothingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeothingCtrl = $controller('GeothingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
