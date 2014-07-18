'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('formController', function ($scope, $http) {

    $scope.formData = {};

    $scope.processForm = function() {
      $scope.message = 'Fetching results...';

      var rack = angular.isDefined( $scope.formData.rack ) ? $scope.formData.rack : '';
      var regex = angular.isDefined( $scope.formData.regex ) ? $scope.formData.regex : '';

      $http({
        method: 'JSONP',
        url: 'http://modille-unscrabble-api-rails.herokuapp.com/unscrabble.json?callback=JSON_CALLBACK&rack=' + rack + '&regex=' + regex,
      })
      .success( function(response) {
        console.log( response );
        $scope.message = 'Results: ' + response.results.join( ', ' );
      });
    };

  });