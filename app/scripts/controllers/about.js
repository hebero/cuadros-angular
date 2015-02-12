'use strict';

/**
 * @ngdoc function
 * @name yoloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoloApp
 */
angular.module('yoloApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
