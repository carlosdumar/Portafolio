(function() {

	angular.module('detailPortfolio.controllers', [])
		.controller('DtllPortafolioController', ['$scope', '$routeParams', 'detailPortfolioService', function ($scope, $routeParams, detailService) {

			var name = $routeParams.name;
			$scope.details = {};

			detailService.byName(name)
				.then(function (data) {
					$scope.details = data;	
				});
		}]);
})();