var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	console.log('Received:' + request.url);
	response.write("Request ok - " + Date.now());
}).listen(8000, '127.0.0.1');

console.log('Server Started');