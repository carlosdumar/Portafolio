(function() {

	angular.module('detailPortfolio.services', [])
		.factory('detailPortfolioService', ['$http', '$q', function ($http, $q) {

			var details = {
				blogs: [
					{
						title: 'DumarBikesStore',
						subtitle: 'Implementación exitosa para nuestro cliente de Bikes E-commerce',
						urlWebSite: 'http://www.dumarbikesstore.com.co',
						blog: [
							{ url: 'image/detailsDBS.jpg', text: 'Por cada producto de la tienda se creo una descripción detallada de cada uno, en la cual se especifica las caracteristicas y precios.'},
							{ url: 'image/manillar.jpg', text: 'Se brinda la opcion para que el usuario pueda escojer diferentes imagens de un producto para ver un mayor detalle de estos. El menu fue incluido al lado de la imagen principal.'},
							{ url: 'image/footerDBS.jpg', text: 'La pagina se diseño con las ultimas tendencias web. Un ejemplo de esto es el footer moderno, en donde ya no aparece opciones tipicas como "Acerca de Nosotros", sino que proporciona las opcines para un contacto mas directos por medio de las redes sociales actuales.'}
						]					
					}, 
					{
						title: 'Portafolio Carlos Rodriguez',
						subtitle: 'Atractivo y Simple portafolio online para profesionales modernos',
						urlWebSite: 'http://carlosdumar.github.io/Portafolio/',					 
						blog: [
							{ url: 'image/portfolio.jpg', text: 'Portada realizada con diseño intuitivo y agradable al usuario. Se da enfasis en el cargo y la pasion del profesional como uno de los atractivos que mas se buscar mostrar, sumado a esto se inclue un fondo paisajistico para una mayor sensacion de tranquilidad al lector.'},
							{ url: 'image/cv-portfolio.jpg', text: 'Hoy en dia en indispensable tener el CV no solo online sino que tambien es importante en una pagina personalizada resaltando los logros mas importantes.'}							
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
