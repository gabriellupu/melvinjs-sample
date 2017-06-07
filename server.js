var http = require('http');
var staticServer = require('node-static');

var fileServer = new staticServer.Server('./www');
var fileServerNode = new staticServer.Server('./');

var server = http.createServer(function(req, res) {
    if (req.url.match(/\/node_modules\//)) {
        req.addListener('end', function() {
            fileServerNode.serve(req, res);
        }).resume();
    } else {
        req.addListener('end', function() {
            fileServer.serve(req, res);
        }).resume();
    }
});

console.log("listening on port 8000");
server.listen(8000);
