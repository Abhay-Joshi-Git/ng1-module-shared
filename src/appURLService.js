//not used
(function() {
   'use strict';

   var module = angular.module('shared');

   module.provider('appURLService', function() {
       var sitePrefix = '';
       var baseUrl = '';

       this.setSitePrefix = function(value) {
           sitePrefix = value;
       }

       this.setBaseURL = function(value) {
           baseUrl = value;
       }

       this.$get = function() {
           return {
               getPrefixedURL: function(resourcePath, isAbsolute) {
                    if (isAbsolute) {
                        return baseUrl + sitePrefix + resourcePath;
                    } else {
                        return sitePrefix + resourcePath;
                    }
               }
           }
       }
   }); 
})()