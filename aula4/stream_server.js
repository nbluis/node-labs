var http = require("http")

var server = http.createServer();

server.on('request', function(request, response) {
	response.write('First chunk');
	response.write('Second chunk');
	response.end('End Request');
});

server.listen(8888);