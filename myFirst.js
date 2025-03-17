var http = require('http');
var dt = require('./myFirstModule');
var url = require('url');
//Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  }).listen(8080);