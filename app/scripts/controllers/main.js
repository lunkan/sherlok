'use strict';

/**
 * @ngdoc function
 * @name dashaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashaApp
 */
angular.module('dashaApp')
  .controller('MainCtrl', function ($scope, $location, ImageService) {

	$scope.hasNext = false;
	$scope.hasPrevious = false;

	$scope.currentIndex = 0;
	$scope.numItems = 0;
	$scope.currentItem;
	
	$scope.snapshotCollection;
	
	function refresh() {
		$scope.currentItem = ImageService.getCollection().getCurrent();
		$scope.currentIndex = ImageService.getCollection().currentIndex + 1;
		$scope.numItems = ImageService.getCollection().getSize();
		
		$scope.snapshotCollection = ImageService.getCollection().getCurrent().snapshotCollection;
		
		$scope.hasNext = ImageService.getCollection().hasNext();
		$scope.hasPrevious = ImageService.getCollection().hasPrevious();
	}
	
	$scope.onNext = function() {
		if(ImageService.getCollection().next()) {
			refresh();
		}
	};
	
	$scope.onPrevious = function() {
		if(ImageService.getCollection().previous()) {
			refresh();
		}
	};

    $scope.onSave = function() {
        $location.path('/save');
    };

    $scope.onQuit = function() {
        $location.path('/');
    };


	
	if(!ImageService.getCollection()) {
		$location.path('/');
	}
	else {
		refresh();
	}
  });
