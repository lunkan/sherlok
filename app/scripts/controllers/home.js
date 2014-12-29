'use strict';

angular.module('dashaApp')
  .controller('HomeCtrl', function ($scope, $location, $timeout, ImageService) {

	$scope.busyMsg;
	
	$scope.newSession = function() {
		$scope.busyMsg = "Comparing images...";
		
		ImageService.compare().then(
			function(success) {
				$timeout(function() {
					$scope.loadSession();
				}, 1000);
			},
			function(error) {
				alert('load image collection ' + error);
			}
		);
	}
	
	$scope.loadSession = function() {
		$scope.busyMsg = "Loading images...";
		
		ImageService.load().then(
			function(success) {
				$timeout(function() {
					$location.path('/main');	
				}, 1000);
			},
			function(error) {
				alert('load image collection ' + error);
			}
		);
	}
  });
