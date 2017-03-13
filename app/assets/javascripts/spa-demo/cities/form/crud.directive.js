(function() {
  "use strict";

  angular
    .module("spa-demo.cities")
    .directive("sdCitiesCrudForm", CitiesCrudFormDirective);//sd stands for spa-demo

  CitiesCrudFormDirective.$inject = ["spa-demo.APP_CONFIG"];

  function CitiesCrudFormDirective(APP_CONFIG) {
    var directive = {
        templateUrl: APP_CONFIG.cities_crud_form_html,
        replace: true,
        bindToController: true,
        controller: "spa-demo.cities.CitiesController",
        controllerAs: "citiesVM",
        restrict: "E",
        link: link,
        scope: false//no new scope created, use the parent scope (default)
    };
    return directive;

    function link(scope, element, attrs) {
      console.log("CitiesCrudFormDirective", scope);
    }
  }

})();