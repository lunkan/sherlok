'use strict';

angular.module('dashaApp')
  .controller('ImageSnapshotItemCtrl', function ($scope, $mdDialog, ImageService) {

	$scope.isReady;
	$scope.item;
	
	$scope.init = function(snapshotItem) {
		$scope.item = snapshotItem;
		$scope.isReady = true;
	};

    $scope.inspect = function(event, selected) {
        console.log('INSPECT!', angular.element(document.body));

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'views/image-inspector.html',
            parent: angular.element(document.body),
            targetEvent: event,
            locals: {
                selected: selected,
                snapshotItem: $scope.item
            }
        })
        .then(function(answer) {
            console.log(answer);
            //$scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
            console.log('No answer!');
            //$scope.alert = 'You cancelled the dialog.';
        });
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

function DialogController($scope, $mdDialog, snapshotItem, selected) {

    $scope.item = snapshotItem;
    $scope.selectedIndex = (function(selected) {
        switch(selected) {
            case 'master':
                return 2;
            case 'diff':
                return 1;
            default:
                return 0;
        }
    })(selected);

    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.approve = function(answer) {
        $mdDialog.hide(answer);
    };
}
