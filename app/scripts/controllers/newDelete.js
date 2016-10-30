(function () {
    'use strict';

    angular
        .module('app')
        .controller('deleteCtrl', ["$http", deleteCtrl ]);

    deleteCtrl.$inject = ['$http'];

    function deleteCtrl($http) {
        var vm = this;

        vm.timecards = [];
        vm.getAll = getAll;
        vm.delete = delete;


        init();

        function init(){
            getAll();
        }

        function getAll(){
            var url = "/timecard";
            var timecardPromise = $http.get(url);
            timecardPromise.then(function(response){
                vm.timecards = response.data;
            });
        }

        function delete(id){
            var url = "/timecard/delete/" + id;
            $http.post(url).then(function(response){
                vm.delete = response.data;
            });
        }
    }
})();
