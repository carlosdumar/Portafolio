(function() {

	angular
		.module('detailPortfolio.services', [])
		.factory('detailPortfolioService', detailPortfolioService)

			detailPortfolioService.$inject = ['$http','$q'];

			function detailPortfolioService($http, $q) {
				return {
					getDetailPortfolio: getDetailPortfolio,
					getDetailPortfolioByName: getDetailPortfolioByName
				};

				function getDetailPortfolio() {
					return $http.get('http://localhost:3000/details')
						.then(getDetailPortfolioComplete);

					function getDetailPortfolioComplete(response) {
						return response.data;
					}
				}

				function getDetailPortfolioByName(name) {

					var defered = $q.defer();
					var promise = defered.promise;

					getDetailPortfolio()
						.then(getDetailPortfolioByNameComplete)
						.catch(getDetailPortfolioByNameFailed);

					function getDetailPortfolioByNameComplete(response) {
						var results = response.filter(function (detail) {
							return detail.title === name;
						});

						if(results.length > 0) {
							defered.resolve(results[0]);
						} else {
							defered.reject();
						}
					}

					function getDetailPortfolioByNameFailed(e) {
			        var newMessage = 'XHR Failed for getCustomer'
			        if (e.data && e.data.description) {
			          newMessage = newMessage + '\n' + e.data.description;
			        }
			        e.data.description = newMessage;
			        return $q.reject(e);
			    }
					return defered.promise;
				}
			}
})();
