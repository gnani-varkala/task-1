
(function () {
    'use strict';

    angular
        .module('fieldApp')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise('/');

          $stateProvider
              .state('main', {
                  url:'/',
                  controller : 'jsonCtrl',
                  templateUrl: 'VIEW/main-page.html',
                  resolve: {
                    getMyJson: function($http){
                      return  $http.get("./JSON/table.json").then(function(response) {
                        return response.data;
                        })
                    }
                  }
              });
        }]);
})();
