var express = require('express');
var app = express.createServer();

app.get('/:nome', function(request, response) {
	console.log('recurso? ' + request.params.nome);
	console.log('nome da query:' +  request.query.nome);
	response.end();
}).listen(8888);