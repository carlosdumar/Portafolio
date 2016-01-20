(function() {

	angular.module('home.services', [])
		.factory('homeService', ['$http', '$q', function ($http, $q) {
			
			var homes = [
					{portafolio: 'DumarBikesStore', tipo: 'WebDevelopment', urlImg: 'image/dumarbikestore.jpg'},
					{portafolio: 'Portafolio Carlos Rodriguez', tipo: 'WebDevelopment', urlImg: 'image/portfolio.jpg'}
				];
			
			function all() {

				var deferred = $q.defer();
				deferred.resolve(homes);

				return deferred.promise;
			}
			return {
				all: all
			}
		}]);
})();