(function() {
  'use strict';

  var module = angular.module('shared');

  module.directive('congradulatoryBanner', [
    function() {
      return {
        restrict: 'E',
        replace: false,
        scope: {
          message: '='
        },
        //template: '<div>Congrats</div>',
        templateUrl: 'congradulatoryBanner/congradulatoryBanner.html',
        link: function(scope) {
          scope.cm = "Congrats from modular app,  " + scope.message;
        }
      };
    }]);
})();
