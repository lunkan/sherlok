/**
 * Created by p950lqj on 2015-06-12.
 */
var fs = require('fs');

var load = require('./load');
var save = require('./save');
var compare = require('./compare');

var Api = function() {

    var workspacePath;

    return function (req, res, next) {

        req.setEncoding('utf8');

        var response;

        //COMPARE - ...
        if(req.url === "/api/compare") {
            response = compare();
            res.writeHead(200, {"Content-Type": "text/json"});
            res.write(JSON.stringify("compared"));
            res.end();
        }
        //LOAD - ...
        else if(req.url === "/api/details") {
            req.on('data', function (rawData) {
                var data = JSON.parse(rawData);

                try {
                    if (fs.lstatSync(data.path).isDirectory()) {
                        workspacePath = data.path;
                        response = load(workspacePath);

                        res.writeHead(200, {"Content-Type": "text/json"});
                        res.write(JSON.stringify(response));
                        res.end();
                    }
                }
                catch (e) {
                    next();
                }
            });
        }
        //SAVE - ...
        else if(req.url === "/api/save") {
            if(workspacePath) {
                req.on('data', function (rawData) {
                    var data = JSON.parse(rawData);
                    save(workspacePath, data);
                    res.writeHead(200, {"Content-Type": "text/json"});
                    res.write(JSON.stringify("success"));
                    res.end();
                });
            }
        }
        else {
            next();
        }
    };
};

module.exports = new Api();