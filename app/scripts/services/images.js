angular.module('dashaApp').service('ImageService', function($q, $http, ImageCollection){
	
	var collection;
	
	this.compare = function() {
		return $q(function(resolve, reject) {
			$http.get('/api/compare').
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
			$http.get('/api/details').
				success(function(data, status, headers, config) {
					collection = new ImageCollection(data.snapshots);
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