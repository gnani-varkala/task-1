(function () {
    'use strict';

    angular
        .module('fieldApp')
        .controller('jsonCtrl', jsonCtrl);

    jsonCtrl.$inject = ['$scope','getMyJson'];
    function jsonCtrl($scope,getMyJson){

      console.log(getMyJson);
      $scope.myJson = getMyJson;
      
    }
})();
