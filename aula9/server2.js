var http = require('http');
var url = require('url');
var queryStringUtil = require('querystring');

var server = http.createServer(function (request, response){
	var data = url.parse(request.url);
	var queryString = queryStringUtil.parse(data.query);
	
	console.log(data);
	response.write('\nNome:' + queryString.nome);
	response.write('\nSearch: ' + data.search);
	response.write('\nPathName: ' + data.pathname);
	response.write('\nHref: ' + data.href);
	response.end();
}).listen(8888);
