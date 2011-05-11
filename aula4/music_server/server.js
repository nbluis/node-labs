var http = require('http');
var path = require('path');
var fileSystem = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
	var filePath = path.join(__dirname, 'musica.mp3');
	var stat = fileSystem.statSync(filePath);
	
	response.writeHead(200, {
		'Content-Type': 'audio/mpeg',
		'Content-Length': stat.size
	});
	
	var readStream = fileSystem.createReadStream(filePath);
	
	readStream.on('data', function(chunk) {
		if (!response.write(chunk)) readStream.pause();
	});
	
	response.on('drain', function() {
		readStream.resume();
	});
	
	readStream.on('end', function() {
		response.end();
	});
});

server.listen(8888);