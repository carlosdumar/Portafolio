(function() {

	angular
		.module('detailPortfolio.controllers', [])
		.controller('DtllPortafolioController', DtllPortafolioController)

			DtllPortafolioController.$inject = ['detailPortfolioService', '$scope', '$routeParams'];

			function DtllPortafolioController(detailPortfolioService, $scope, $routeParams) {
				var name = $routeParams.name;
				$scope.details = {};

				detailPortfolioService.getDetailPortfolioByName(name)
					.then(function(data) {
						$scope.details = data;
					});
			}
})();
