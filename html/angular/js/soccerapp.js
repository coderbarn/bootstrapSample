var myApp = angular.module('demo', [])
			.controller('players', function($scope, $http) {
			    $http.get('http://localhost:9000/people/').
			        then(function(response) {
			            $scope.players = response.data._embedded.people;
			        });
			});