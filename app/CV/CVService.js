(function() {

	angular.module('cv.services', [])
		.factory('cvService', ['$http', '$q', function ($http, $q) {

			var curriculums = 
				{ 
					introduccion: 'Ingeniero de Telecomunicaciones con experiencia laboral en el análisis, diseño, implementación, pruebas y despliegue de software, servicio al cliente e infraestructura de red. Soy una persona con gran capacidad de trabajo en equipo, capacidad de adaptación y aprendizaje, creatividad y dinamismo organizacional. Dominio de los idiomas Ingles y Portugués en un nivel Intermedio y Avanzado respectivamente, tanto escrito como hablado.',
					experiencias: [
						{ empresa: 'Intergrupo', cargo: 'Sofware Developer', ano: '2010 - Presente', descripcion: 'Mi trabajo actualmente en la empresa consiste en implementar pruebas de desarrollador para validar que la implementación realizada está trabajando adecuadamente y es apta para pasar a pruebas internas.'},
						{ empresa: 'Servinte S.A', cargo: 'Analista de Desarrollo', ano: '2009 - 2010', descripcion: 'Mi trabajo en la empresa fue la del Análisis, desarrollo, pruebas y puesta en funcionamiento del software desarrollado para todas las áreas involucradas en la gestión de pacientes, facturación, contabilidad, admisiones y suministros en los hospitales y clínicas clientes.'},
						{ empresa: 'Bynet System & Service', cargo: 'Auxiliar de Proyectos', ano: '2009', descripcion: 'Analizar, desarrollar y ejecutar proyectos de redes en empresas, colegios, universidades y demás instituciones educativas en el que era necesario tener un sistema de video vigilancia, conectividad, movilidad y seguridad en todas las instalaciones físicas.'}
					],
					estudios: [
						{ institucion: 'Universidad Santo Tomas', programa: 'Ingenieria de Telecomunicaiones', ano: '2009', descripcion: ''},
						{ institucion: 'Universidad EAFIT', programa: 'Diplomado en Arquitectura y Desarrollo de Software para Internet', ano: '2010 - Presente', descripcion: ''},
						{ institucion: 'Universidad Pontificie Bolivariana', programa: 'Especializacion en Gerencia', ano: '2015 - Presente', descripcion: ''}
					],
					cursos: [
						{ nombre: 'Curso Profesional de Frontend', institucion: 'Platzi', ano: '2014', url: 'https://platzi.com/usuarios/carlosdumar/', descripcion: ''},
						{ nombre: 'Curso Profesional de Git y GitHub', institucion: 'Platzi', ano: '2015', url: 'https://platzi.com/usuarios/carlosdumar/', descripcion: ''},
						{ nombre: 'Curso Portugues', institucion: 'Instituto de Lingua Portuguesa', url: 'http://www.ilpcolombia.com.co/', ano: '2013', descripcion: ''}
					]
				};
			function all() {
				var deferred = $q.defer();
				deferred.resolve(curriculums);

				return deferred.promise;
			}
			return {
				all: all
			}
		}]);
})();