(function() {
    'use strict';
    angular.module('flickrApp', ['ngMaterial'])
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }])
        .controller('ListController', ['$scope', '$http', function($scope, $http) {
            $scope.results = [];

            $scope.search = function() {
                $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest',
                    params: {
                        method: 'flickr.photos.getRecent',
                        api_key: '4cd95b5ad05844319ee958bf96ec0150',
                        text: $scope.searchTerm,
                        format: 'json',
                        nojsoncallback: 1
                    }
                }).success(function(data) {
                    console.log(data);
                    $scope.results = data;
                }).error(function(error) {
                    console.log(error);
                });
            }

        }]);
})();