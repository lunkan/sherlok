angular.module('dashaApp').factory('ImageCollection', function(ImageItem) {

	var ImageCollection = function(imageData) {
		
		this.collection = [];
		this.currentIndex = 0;
		
		for(var i=0; i<imageData.diff.length; i++) {
			var fileName = imageData.diff[i];
			var fullName = fileName.split(".")[0];
			var name = fullName.split("_")[0];
			var type = fullName.substr(fullName.indexOf("_") + 1);
			var imageItem = null;
			
			for(var j=0; j<this.collection.length; j++) {
				if(this.collection[j].name == name) {
					imageItem = this.collection[j];
					break;
				}
			}
			
			if(!imageItem) {
				imageItem = new ImageItem(name);
				this.collection.push(imageItem);
			}
			
			imageItem.addSnapshotItem(type, 'images/master/'+fileName, 'images/candidate/'+fileName, 'images/diff/'+fileName);
		}
    };
	
	ImageCollection.prototype.getSize = function() {
		return this.collection.length;
	};
	
	ImageCollection.prototype.hasNext = function() {
		return (this.currentIndex+1 < this.collection.length) ? true : false;
	};
	
	ImageCollection.prototype.hasPrevious = function() {
		return (this.currentIndex-1 >= 0) ? true : false;
	};
	
	ImageCollection.prototype.getCurrent = function() {
		return this.collection[this.currentIndex];
	};
	
	ImageCollection.prototype.getByIndex = function(index) {
		if(index >= 0 && index < this.collection.length) {
			this.currentIndex = index;
			return this.current();
		}
		else {
			return null;
		}
	};
	
	ImageCollection.prototype.next = function() {
		if(this.hasNext()) {
			this.currentIndex++;
			return this.getCurrent();
		} else {
			return null;
		}
	};
	
	ImageCollection.prototype.previous = function() {
		if(this.hasPrevious()) {
			this.currentIndex--;
			return this.getCurrent();
		}
		else {
			return null;
		}
	};

    ImageCollection.prototype.getConfirmed = function() {

        var confirmed = [];
        this.collection.forEach(function(imageItem) {
            confirmed = confirmed.concat(imageItem.getConfirmed());
        });

        return confirmed;
    };
	
	return ImageCollection;
});