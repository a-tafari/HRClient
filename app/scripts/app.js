'use strict';

/**
 * @ngdoc overview
 * @name hrclientApp
 * @description
 * # hrclientApp
 *
 * Main module of the application.
 */
angular
  .module('hrclientApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/timecard', {
        templateUrl: 'views/timecard.html',
        controller: 'TimeCardCtrl',
        controllerAs: 'TimeCard'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
