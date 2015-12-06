(function () {
	var app = angular.module('portafolio',[
		'ngRoute',
		'home.controller',
		'home.services'
	]);

	app.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'app/home/home.html',
				controller: 'HomeController'
			})
			.when('/portafolio', {
				templateUrl: 'DetailPortfolio.html',
				controller: 'DtllPortafolioController'
			})
			.when('/blog', {
				templateUrl: 'blog.html',
				controller: 'BlogController'
			})
			.when('/CV', {
				templateUrl: 'CV.html',
				controller: 'CVController'
			})
			.otherwise({
				redirecTo: '/'
			});
	}]);
})();