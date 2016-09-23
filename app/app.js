(function () {
	angular
		.module('portafolio',[
			'ngRoute',
			'home.controller',
			'home.services',
			'detailPortfolio.controllers',
			'detailPortfolio.services',
			'cv.controllers',
			'cv.services',
			'blog.controllers',
			'blog.services',
			'contacto.services',
			'contacto.controllers',
			'detailBlog.directives',
			'detailBlog.services'
		])

	.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'app/home/home.html',
				controller: 'HomeController'
			})
			.when('/portafolio/:name', {
				templateUrl: 'app/detailPortfolio/DetailPortfolio.html',
				controller: 'DtllPortafolioController'
			})
			.when('/blog', {
				templateUrl: 'app/blog/blog.html',
				controller: 'BlogController'
			})
			.when('/detailBlog/:name', {
				templateUrl: 'app/detailBlog/detailBlog.html',
				controller: 'DetailBlogController'
			})
			.when('/CV', {
				templateUrl: 'app/CV/CV.html',
				controller: 'CVController'
			})
			.when('/contacto', {
				templateUrl: 'app/contacto/contacto.html',
				controller: 'ContactoController'
			})
			.otherwise({
				redirecTo: '/'
			});
	}]);
})();
