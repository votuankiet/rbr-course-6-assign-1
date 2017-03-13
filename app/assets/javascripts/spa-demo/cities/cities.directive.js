(function() {
  "use strict";

  angular
    .module("spa-demo.cities")
    .directive("sdCities", CitiesDirective);//sd stands for spa-demo

  CitiesDirective.$inject = ["spa-demo.APP_CONFIG"];

  function CitiesDirective(APP_CONFIG) {
    var directive = {
        templateUrl: APP_CONFIG.cities_html,
        replace: true,
        bindToController: true,
        controller: "spa-demo.cities.CitiesController",
        controllerAs: "citiesVM",
        restrict: "E",
        scope: {},
        link: link
    };

    //When an isolate scope is used for a directive (see above), bindToController: true will allow a component to have its properties bound to the controller, rather than to scope.
    //After the controller is instantiated, the initial values of the isolate scope bindings will be bound to the controller properties. 
    //You can access these bindings once they have been initialized by providing a controller method called $onInit, which is called after all the controllers on an element have been constructed and had their bindings initialized.
    //https://docs.angularjs.org/api/ng/service/$compile#directive-definition-object
    return directive;

    function link(scope, element, attrs) {
      console.log("CitiesDirective", scope);
    }
  }

})();