angular.module('dashaApp').service('ImageService', function($q, $http, ImageCollection){
	
	var collection;
	
	this.compare = function() {
		return $q(function(resolve, reject) {
			$http.post('/api/compare').
				success(function(data, status, headers, config) {
					resolve("success");
				}).
				error(function(data, status, headers, config) {
					reject("error");
				});
		});
	};
	
	this.load = function() {
		return $q(function(resolve, reject) {

            var workspacePath = {
                path: './app/images/'
            };



            //path: 'C:/screenshots/'

			$http.post('/api/details', workspacePath).
				success(function(data, status, headers, config) {
					collection = new ImageCollection(data.snapshots);
					resolve("success");
				}).
				error(function(data, status, headers, config) {
					reject("error");
				});
		});
	};

    this.save = function() {
        return $q(function(resolve, reject) {
            //console.log('collection', collection.getConfirmed());

            var confirmedImages = {
                files: collection.getConfirmed()
            };

            $http.post('/api/save', confirmedImages).
                success(function(data, status, headers, config) {
                    console.log('saved!');
                    resolve("success");
                }).
                error(function(data, status, headers, config) {
                    reject("error");
                });
        });
    };
	
	this.getCollection = function() {
		return collection;
	};
});