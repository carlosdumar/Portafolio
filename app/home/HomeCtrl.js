(function() {

	angular
		.module('home.controller', [])
		.controller('HomeController', HomeController)

			HomeController.$inject = ['homeService', '$scope'];

			function HomeController(homeService, $scope) {
				homeService.getHome()
					.then(function(data) {
						$scope.homes = data;
					});
			}
})();
