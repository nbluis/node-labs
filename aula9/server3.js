var http = require('http');

var server = http.createServer(function (request, response){
	//response.writeHead(404, 'Not found');
	console.log(request.headers.cookie);
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');
	response.removeHeader('Set-Cookie');
	response.setHeader('Set-Cookie', [
		'curso=Node.js; Path=/my_cookies; Expires=Thu, 10 Jun 2012 10:10:10 GMT',
		'linguagem=javascript; Domain=localhost; Expires=Thu, 10 Jun 2022 10:10:10 GMT'
	]);
	response.end();
}).listen(8888);
