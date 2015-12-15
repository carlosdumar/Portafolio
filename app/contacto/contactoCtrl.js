(function(){
	angular.module('contacto.controllers', [])
		.controller('ContactoController', ['$scope', 'contactoService', function ($scope, contactoService) {

			var contacto = $scope.contactName;

			contactoService.saveContacto(contacto);
		}]);
})();