var http = require('http');
var path = require('path');
var fileSystem = require('fs');
var util = require('util');

var server = http.createServer();

server.on('request', function(request, response) {
	var filePath = path.join(__dirname, 'musica.mp3');
	var stat = fileSystem.statSync(filePath);
	
	response.writeHead(200, {
		'Content-Type': 'audio/mpeg',
		'Content-Length': stat.size
	});
	
	var readStream = fileSystem.createReadStream(filePath);
	
	util.pump(readStream, response);
});

server.listen(8888);