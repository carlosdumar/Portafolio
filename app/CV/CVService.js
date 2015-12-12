(function () {

	angular.module('cv.services', [])
		.factory('cvService', ['$http', '$q', function ($http, $q) {

			var CV = [
				{ 
					introduccion: 'detail perfil detail perfil detail perfil detail perfil',
					experiencia: [
						{ empresa: 'Intergrupo', cargo: 'Sofware Developer', ano: '2010 - Presente'},
						{ empresa: 'Servinte S.A', cargo: 'Analista de Desarrollo', año: '2009 - 2010'}
					],
					estudios: [
						{ institucion: 'Universidad Santo Tomas', programa: 'Ingenieria de Telecomunicaiones', ano: '2009'},
						{ institucion: 'Universidad Pontificie Bolivariana', programa: 'Especializacion en Gerencia', ano: '2015 - Prensente'}
					],
					curso: [
						{ nombre: 'Curso Profesional de Frontend', institucion: 'Platzi', modalidad: 'Virtual'}
					]
				}				
			];
			function all() {
				var deferred = $q.defer();
				deferred = resolve(CV);

				return deferred.promise;
			}
			return {
				all: all
			}
		}]);
})();