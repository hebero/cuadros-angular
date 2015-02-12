'use strict';

/**
 * @ngdoc function
 * @name yoloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoloApp
 */
angular.module('yoloApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
