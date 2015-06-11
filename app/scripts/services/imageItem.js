angular.module('dashaApp').factory('ImageItem', function() {

    var ImageSnapshotCollection = function(type, masterPath, candidatePath, diffPath) {
        this.type = type;
        this.images = {
            master: masterPath,
            candidate: candidatePath,
            diff: diffPath
        };
        this.selected = 'master';
    };

	var ImageItem = function (name) {
		this.snapshotCollection = [];
		this.name = name;
    };

	ImageItem.prototype.addSnapshotItem = function(type, masterPath, candidatePath, diffPath) {
        this.snapshotCollection.push(new ImageSnapshotCollection(type, masterPath, candidatePath, diffPath));
	};

	ImageItem.prototype.save = function() {
		//
	};

    ImageItem.prototype.getConfirmed = function() {
        var confirmedSnapshots = [];
        this.snapshotCollection.forEach(function(snapshot) {
            if(snapshot.selected === 'candidate') {
                confirmedSnapshots.push(snapshot.images.candidate);
            }
        });

        return confirmedSnapshots;
    };
	
	return ImageItem;
});