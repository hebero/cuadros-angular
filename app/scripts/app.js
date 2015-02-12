'use strict';

/**
 * @ngdoc overview
 * @name yoloApp
 * @description
 * # yoloApp
 *
 * Main module of the application.
 */
angular
  .module('yoloApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dibujo', {
        templateUrl: 'views/dibujo.html',
        controller: 'MainCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
