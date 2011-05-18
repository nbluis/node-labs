var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response){
	var data = url.parse(request.url, true);
	var filename = __dirname + data.pathname;
	console.log(filename);
	fs.readFile(filename, function(err, file){
		if (err) {
			response.statuscode = 404;
			response.end();
		} else {
			fs.stat(filename, function(err2, stat)	{
				response.writeHead(200, {
					'Content-Type': 'text/html; charset=utf-8',
					'Content-Length': stat.size
				});
				response.end(file.toString('utf8'));
			});
		}
	});
}).listen(8888);
