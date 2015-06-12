var fs = require('fs');
var path = require('path');

var Save = function() {

    var saveImages = function(workspacePath, data) {

        console.log('files', data);
        data.files.forEach(function(fileName) {
            var copyFrom = workspacePath + '/screenshots/candidate/'+fileName;
            var copyTo = workspacePath + '/screenshots/master/' + fileName;
            var removeFrom = workspacePath + '/screenshots/diff/' + fileName;

            copyFile(copyFrom, copyTo, null);
            fs.unlinkSync(removeFrom);
        });

        return "Compared";
    };

    return saveImages;

    function copyFile(source, target, cb) {
        var cbCalled = false;

        var rd = fs.createReadStream(source);
        rd.on("error", function(err) {
            done(err);
        });
        var wr = fs.createWriteStream(target);
        wr.on("error", function(err) {
            done(err);
        });
        wr.on("close", function(ex) {
            done();
        });
        rd.pipe(wr);

        function done(err) {
            if (!cbCalled) {
                //cb(err);
                cbCalled = true;
            }
        }
    }
};

module.exports = new Save();