'use strict';

angular.module('myApp.view1', [
    'ngRoute',
    'ui.bootstrap'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
    $scope.asyncSelected = null;
    $scope.typeaheadResults = [
        "Alessandro",
        "Davide",
        "Francesco"
    ];
    
    $scope.getTypeaheadResults = function(query) {
      return $http.get('/api/user/alediaferia/datasource/git-commands/search?q=' + query + '&auth_token=6e26e7d7af928525cbae238d3d302ab5').
        then(function(response) {
            return response.data.results.map(function(r) {
                return r.word;
            });
        }, function(response) {
            return [];
        });
    };
}]);