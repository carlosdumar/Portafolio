(function () {
	angular
		.module('cv.controllers', [])
		.controller('CVController', CVController)

		CVController.$inject = ['cvService', '$scope'];

		function CVController(cvService, $scope) {
			cvService.getCV()
				.then(function(data) {
					$scope.cv = data;
				});
		}
})();
