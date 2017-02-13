(function() {
  'use strict';

  angular.module('shared', []);
})();;(function() {
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
;angular.module('shared').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('congradulatoryBanner/congradulatoryBanner.html',
    "<div class=\"congradulatory-banner-msg\">\n" +
    "    Hey, {{cm}}\n" +
    "    <br />\n" +
    "    <img src=\"images/share.png\"\n" +
    "    <br />\n" +
    "</div>"
  );

}]);
