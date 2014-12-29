angular.module('dashaApp').factory('ImageItem', function() {

	var ImageItem = function (name) {
		this.snapshotCollection = [];
		this.name = name;
    };
	
	ImageItem.prototype.addSnapshotItem = function(type, masterPath, candidatePath, diffPath) {
		this.snapshotCollection.push({
			type: type,
			images: {
				master: masterPath,
				candidate: candidatePath,
				diff: diffPath
			},
			selected: 'master'
		});
	};
	
	ImageItem.prototype.save = function() {
		//
	};
	
	return ImageItem;
});