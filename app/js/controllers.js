'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('formController', function ($scope, $http) {

    $scope.formData = {};

    $scope.processForm = function() {
      $scope.message = 'Fetching results...';
      $http({
        method: 'JSONP',
        url: 'http://modille-unscrabble-api-rails.herokuapp.com/unscrabble.json?callback=JSON_CALLBACK&rack=' + $scope.formData.rack + '&regex=' + $scope.formData.regex,
      })
      .success( function(response) {
        console.log( response );
        $scope.message = 'Results: ' + response.results.join( ', ' );
      });
    };

  });