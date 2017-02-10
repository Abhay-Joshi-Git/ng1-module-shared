(function() {
  'use strict';

  var module = angular.module('shared');

  module.directive('congradulatoryBanner', [
    'URLPrefixer',
    function(URLPrefixer) {
      return {
        restrict: 'E',
        replace: false,
        scope: {
          message: '='
        },
        templateUrl: URLPrefixer.getURL('congradulatoryBanner.html'),
        link: function(scope) {
          scope.$watch('message', function(newVal) {
            scope.congrdulatoryMessage = "Congrats from modular app,  " + newVal
          });
        }
      };
    }]);
})();
