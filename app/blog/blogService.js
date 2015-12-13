(function () {

	angular.module('blog.services', [])
		.factory('blogService', ['$http', '$q', function ($http, $q) {

			var blogs = 
				[
					{title: 'Titulo Post', url: 'image/webdevelopment.jpg', date: 'Noviembre 19, 2015'},
					{title: 'Titulo Post2', url: 'image/webdevelopment.jpg', date: 'Octubre 20, 2014'},
					{title: 'Titulo Post3', url: 'image/webdevelopment.jpg', date: 'Octubre 20, 2014'},
					{title: 'Titulo Post4', url: 'image/webdevelopment.jpg', date: 'Octubre 10, 2013'}
				]

			function all() {
				var deferred = $q.defer();
				deferred.resolve(blogs);

				return deferred.promise;
			}

			function byName(name) {

				var deferred = $q.defer();

				all().then(function (data) {
					var results = data.filter(function (blog) {
					  return blog.title === name;
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
				all: all
			}
		}]);
})();