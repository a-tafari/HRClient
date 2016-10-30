'use strict';

/**
 * @ngdoc function
 * @name hrclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrclientApp
 */
angular.module('hrclientApp')
  .controller('TimeCardCtrl', function ($http, $scope) {

     $scope.submit = function(){
      //  var email = angular.element("email");
      //  var startTime = angular.element("startTime");
      //  var endTime = angular.element("endTime");

       var timeCard ={
         "email": email.value,
         "startTime": startTime.value,
         "endTime": endTime.value,
       };

       $http({
         method:'POST',
         url: 'http://localhost:8080/timecard',
         data: timeCard
       })
       .then(
         function(response){
           console.log(response.data);
         }

       );

     }

  });
