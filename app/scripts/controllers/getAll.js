'use strict';

angular.module('hrclientApp')
.controller('GetAllCtrl', ['$scope', '$http',
function ($scope, $http){


var timeCard = {
  "email": "",
  "startTime": "",
  "endTime": ""

};
$scope.responses = [];
$http.get("http://localhost:8080/timecard")
.success(
  function(response){
    console.log("testing");
    $scope.responses = response;
    console.log(response);
  }
).error(function(err){
  console.log("Error:" + err.data);
});

}]);
