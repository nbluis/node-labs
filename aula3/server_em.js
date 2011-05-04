var http = require("http")

var server = http.createServer();

server.on('request', function(request, response) {
	response.end('Request sucefull!');
});

server.listen(8888);