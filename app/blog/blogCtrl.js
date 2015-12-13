(function () {

	angular.module('blog.controllers', [])
		.controller('BlogController', ['$scope', '$routeParams', 'blogService', function ($scope, $routeParams, blogService) {

			var name = $routeParams.blogName
			$scope.listaBlogs = {};

			blogService.all().then(function (data) {
				$scope.listaBlogs = data;
			})
		}]);
})();