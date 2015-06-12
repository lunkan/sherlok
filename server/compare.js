var fs = require('fs');
//var resemble = require('node-resemble');

var Compare = function() {

//    var sys = require('sys')
//    var exec = require('child_process').exec;
//
//    exec("dasha run", function (error, stdout, stderr) {
//        sys.print('stdout: ' + stdout);
//        sys.print('stderr: ' + stderr);
//        if (error !== null) {
//            console.log('exec error: ' + error);
//        }
//    });

    var compareImages = function() {

       /* console.log('compareImages', 'Yehhh cool');

        var file = './app/images/master/obama2_chrome.jpg';
        var file2 = './app/images/candidate/obama2_chrome.jpg';

        var diff = resemble(file).compareTo(file2).ignoreColors().onComplete(function(data){
            console.log('compare data', data);

//             {
//             misMatchPercentage : 100, // %
//             isSameDimensions: true, // or false
//             dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
//             getImageDataUrl: function(){}
//             }

        });

        console.log('diff', diff);*/


        return "Compared";
    };

    return compareImages;
};

module.exports = new Compare();