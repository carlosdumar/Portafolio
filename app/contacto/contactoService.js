(function() {

	angular.module('contacto.services', [])
		.factory('contactoService', ['$http', '$q', function ($http, $q) {

			function saveContacto(contacto) {
				return 'contacto' + contacto + ' guardado';
			}
			return {
				saveContacto: saveContacto
			}
		}]);
})();