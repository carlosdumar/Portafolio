(function () {

	angular.module('cv.controllers', [])
		.controller('CVController', ['$scope', '$routeParams', 'cvService', function ($scope, $routeParams, cvService) {

			cvService.all().then(function (data) {
				$scope.cv = data;
			})
		}]);
})();