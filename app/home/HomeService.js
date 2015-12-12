(function() {

	angular.module('home.services', [])
		.factory('homeService', ['$http', '$q', function ($http, $q) {
			
			var homes = [
					{portafolio: 'DumarBikesStore', tipo: 'WebDevelopmenth', urlImg: 'image/webdevelopment.jpg'},
					{portafolio: 'DumarBikesStore2', tipo: 'WebDevelopmenth2', urlImg: 'image/webdevelopment.jpg'}
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