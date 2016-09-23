(function () {
  class CVs {
    constructor() {
      this.bindings = {};
      this.templateUrl = './shared/cv-template.html',
      this.controller = CVController;
      this.controllerAs = 'cvCtrl';
    }
  }

  class CVController {
    constructor($http, $log) {
      this.$log = $log;
      this.$http = $http;
      this.cv = [];
    }
    $onInit() {
      this.$http.get('/curriculums')
        .then((response) => this.cv = response.data);
    }
  }

  angular
    .module('CV.directive',[])
    .directive('CV', CVs);
})();
