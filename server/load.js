var fs = require('fs');
var path = require('path');

var Load = function() {

    var filetypes = ["jpg", "png", "gif"];

    var loadImages = function(workspacePath) {

        //console.log('workspacePath', workspacePath);
        //console.log('master', workspacePath + '/master/');

        //var rootFiles = listImages('C:/screenshots/candidate');
        //console.log('rootFiles', rootFiles);


        var images = {
            "workspace": workspacePath,
            "snapshots": {
                "master": listImages(workspacePath + '/master/'),
                "diff": listImages(workspacePath + '/diff/'),
                "candidate": listImages(workspacePath + '/candidate/')
            }
        };

        //console.log('images', images);
        return images;
    };

    return loadImages;

    function listImages(directive) {
        var imageFiles = [];
        fs.readdirSync(directive).forEach(function(file) {
            filetypes.forEach(function(filetype) {
                if(path.extname(file).indexOf(filetype) > -1) {
                    imageFiles.push(file);
                }
            });
        });
        return imageFiles;
    }
};

module.exports = new Load();
