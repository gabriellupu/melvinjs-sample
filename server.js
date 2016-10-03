var http = require('http');
var httpProxy = require('http-proxy');
var staticServer = require('node-static');

var proxy = httpProxy.createProxyServer();

var fileServer = new staticServer.Server('./www');
var fileServerNode = new staticServer.Server('./');


var server = http.createServer(function(req, res) {
    if (req.url.match(/\/api\//)) {
        proxy.web(req, res, { target: 'http://homi-rest-service.us-west-2.elasticbeanstalk.com' });
    } else if (req.url.match(/\/node_modules\//)) {
        console.log('node module', req.url);
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