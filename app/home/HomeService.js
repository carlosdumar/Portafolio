(function() {

	angular
		.module('home.services', [])
		.factory('homeService', homeService)

			// var homes = [
			// 		{portafolio: 'DumarBikesStore', tipo: 'WebDevelopment', urlImg: 'image/dumarbikesstore.jpg'},
			// 		{portafolio: 'Portafolio Carlos Rodriguez', tipo: 'WebDevelopment', urlImg: 'image/portfolio.jpg'}
			// 	];
			homeService.$inject = ['$http','$q'];

			function homeService($http, $q) {
				return {
					getHome: getHome
				};

				function getHome() {
					return $http.get('http://localhost:3000/homes')
						.then(getHomeComplete);

						function getHomeComplete(response) {
							return response.data;
						}
				}
			}
})();
