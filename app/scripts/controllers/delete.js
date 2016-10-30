
'use strict';

angular.module('hrclientApp')
  .controller('DeleteCtrl', function ($http, $scope) {

     $scope.delete = function(id){
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
         url: 'http://localhost:8080/timecard/delete'+ id,
         data: timeCard
       })
       .then(
         function(response){
           console.log(response.data);
         }

       );

     }

  });
