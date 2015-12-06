(function() {

	angular.module('home.controller', [])
		.controller('HomeController', ['$scope', '$routeParams', 'homeService', function ($scope, $routeParams, homeService) {

			homeService.all().then(function (data) {
				$scope.homes = data;
			})
		}]);
})();