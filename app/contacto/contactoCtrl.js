(function(){
	angular.module('contacto.controllers', [])
		.controller('ContactoController', ['$scope', 'contactoService', function ($scope, contactoService) {

			$scope.saveContact = function(contact) {
				contactoService.saveContacto($scope.contact);
			};
		}]);
})();