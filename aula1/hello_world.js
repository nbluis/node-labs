var http = require('http');
var url = require('url');
var queryString = require('querystring');

var meuModulo = require('first_module');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	var query = queryString.parse(url.parse(request.url).query);
	response.end(meuModulo(query.aluno));
}).listen(8000, '127.0.0.1');

console.log('Started');