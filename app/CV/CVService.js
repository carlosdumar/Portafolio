(function() {

	angular
		.module('cv.services', [])
		.factory('cvService', cvService)

			cvService.$inject = ['$http','$q'];

			function cvService($http, $q) {
				return {
					getCV: getCV
				};

				function getCV() {
					return $http.get('http://localhost:3000/curriculums')
						.then(getCVComplete);

					function getCVComplete(response) {
						return response.data;
					}
				}
			}
})();
