(function () {
    'use strict';

    angular
        .module('fieldApp')
        .controller('jsonCtrl', jsonCtrl);

    jsonCtrl.$inject = ['$scope','getMyJson',"$rootScope"];
    function jsonCtrl($scope,getMyJson,$rootScope){
      $scope.myJson = getMyJson;
      $scope.buttonClick = function(){
        $rootScope.height=$("#fullid").height();
      }
    }
})();
