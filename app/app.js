(function () {
	var app = angular.module('portafolio',[
		'ngRoute',
		'home.controller',
		'home.services',
		'detailPortfolio.controllers',
		'detailPortfolio.services',
		'cv.controllers',
		'cv.services',
		'blog.controllers',
		'blog.services'
	]);

	app.config(['$routeProvider', function ($routeProvider) {

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
			.otherwise({
				redirecTo: '/'
			});
	}]);
})();