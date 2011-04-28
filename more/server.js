var http = require('http');
var url = require('url');
var queryString = require('querystring');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	setInterval(500, function() {
		console.log("more now");
		response.write("More");
	});
}).listen(8000, '127.0.0.1');

console.log('Server Started');