'use strict';

angular.module('dashaApp')
    .controller('SaveCtrl', function ($scope, $location, $timeout, $window, ImageService) {

        $scope.busyMsg = "Saving images...";

        ImageService.save().then(
            function(success) {
                $timeout(function() {
                    $location.path('/');
                    $window.location.reload();
                }, 3000);
            },
            function(error) {
                alert('Save image: ' + error);
            }
        );
    });
