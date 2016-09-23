(function () {

	angular
		.module('blog.controllers', [])
		.controller('BlogController', BlogController)
		.controller('DetailBlogController', DetailBlogController);

			BlogController.$inject = ['blogService', '$scope'];

			function BlogController(blogService, $scope) {
				$scope.listaBlogs = [];

				getPosts();

				function getPosts() {
					return blogService.getPosts()
						.then(function(data){
							$scope.listaBlogs = data;
							return $scope.listaBlogs;
						});
				}
			}

			DetailBlogController.$inject = ['blogService', '$scope', '$routeParams'];

			function DetailBlogController(blogService, $scope, $routeParams) {

				$scope.blog = [];
				var blogName = $routeParams.name

				getPostByName(blogName);

				function getPostByName(name) {
					return blogService.getPostByName(name)
						.then(function(data) {
							$scope.blog = data;
						});
				}
			}
})();
