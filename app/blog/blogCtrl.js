(function () {

	angular.module('blog.controllers', [])
		.controller('BlogController', ['$scope', 'blogService', function ($scope, blogService) {

			
			$scope.listaBlogs = {};

			blogService.all().then(function (data) {
				$scope.listaBlogs = data;
			})
		}])
		.controller('DetailBlogController',['$scope', '$routeParams', 'blogService', function ($scope, $routeParams, blogService) {

			var blogName = $routeParams.name

			$scope.blog = {};

			blogService.byName(blogName)
				.then(function (data) {
					$scope.blog = data;	
				});
		}]);
})();