'use strict';

angular.module('dashaApp')
  .controller('ImageSnapshotItemCtrl', function ($scope, ImageService) {

	$scope.isReady;
	$scope.item;
	
	$scope.init = function(snapshotItem) {
		$scope.item = snapshotItem;
		$scope.isReady = true;
	};
	
	$scope.select = function(type) {
		if(type=='candidate') {
			$scope.item.selected = 'candidate';
		}
		else if(type=='master') {
			$scope.item.selected = 'master';
		}
	}
	
  });
