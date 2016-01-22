(function() {

	angular.module('contacto.services', [])
		.factory('contactoService', ['$http', '$q', function ($http, $q) {

			var myRootRef = new Firebase('https://portfoliocarlos.firebaseio.com/');

			function saveContacto(contact) {
				myRootRef.child("contactos").push(contact);
			}
			return {
				saveContacto: saveContacto
			}
		}]);
})();