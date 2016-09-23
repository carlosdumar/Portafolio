(function () {

	angular
		.module('blog.services', [])
		.factory('blogService', blogService)


			blogService.$inject = ['$http','$q'];

			function blogService($http, $q) {
				return {
					getPosts: getPosts,
					getPostByName: getPostByName
				};

				function getPosts() {
					return $http.get('http://localhost:3000/blogs')
						.then(getPostsComplete);

					function getPostsComplete(response) {
						return response.data;
					}
				}

				function getPostByName(name) {

					var defered = $q.defer();
					var promise = defered.promise;

					getPosts()
						.then(getPostByNameComplete)
						.catch(getPostByNameFailed);

					function getPostByNameComplete(response) {
						var results = response.filter(function (blog) {
							return blog.title === name;
						});

						if(results.length > 0) {
							defered.resolve(results[0]);
						} else {
							defered.reject();
						}
					}

					function getPostByNameFailed(e) {
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
