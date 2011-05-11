var http = require('http')


var options = {
	host: 'localhost',
	port: 8888,
	path: '/',
	method: 'POST'
}

var req = http.request(options, function(response) {
	response.on('data', function(chunk) {
		console.log('Recebido:' + chunk);
	});
	response.on('end', function() {
		console.log('Ending connection!');
	})
});

req.end();