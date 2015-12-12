(function() {

	angular.module('detailPortfolio.services', [])
		.factory('detailPortfolioService', ['$http', '$q', function ($http, $q) {

			var details = {
				blogs: [
					{
						title: 'DumarBikesStore',
						blog: [
							{ url: 'image/webdevelopment.jpg', text: 'Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto'},
							{ url: 'image/webdevelopment.jpg', text: 'Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto Descripcion del proyecto'},
							{ url: 'image/webdevelopment.jpg'},
							{ url: 'image/webdevelopment.jpg'}
						]					
					}, 
					{
						title: 'DumarBikesStore2',						 
						blog: [
							{ url: 'image/webdevelopment.jpg', text: 'Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2'},
							{ url: 'image/webdevelopment.jpg', text: 'Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2 Descripcion del proyecto2'},
							{ url: 'image/webdevelopment.jpg'},
							{ url: 'image/webdevelopment.jpg'}
						]
					}
				]			
			}

			function all() {
				var deferred = $q.defer();
				deferred.resolve(details);

				return deferred.promise;
			}

			function byName(name) {

				var deferred = $q.defer();

				all().then(function (data) {
					var results = data.blogs.filter(function (detail) {
					  return detail.title === name;
					});

					if (results.length > 0) {
					  deferred.resolve(results[0]);
					} else {
					  deferred.reject();
					}
				});

				return deferred.promise;
			}
			return {
				byName: byName
			}
		}])
})();