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
    $scope.alto =  ['a', 'b', 'c','d','e','f','g','h', 'i', 'j', 'k', 'l', 'm', 'n'];
    $scope.ancho=  [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.actual= "nulo";
    $scope.elementos ={};
    $scope.activaElemento = function  (indice1, indice2) {
    	// body...
    		var cadena =  indice1.toString()+indice2.toString();
    		$scope.actual = cadena;
    		if($scope.elementos[cadena]==null)
    				$scope.elementos[cadena]=1;
    			else
    				$scope.elementos[cadena]++;
    }
  });
