var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response){
	var data = url.parse(request.url, true);
	console.log(data);
	response.write('Query {');
	for(var i in data.query) {
		response.write('\n  ' + i + ':' + data.query[i]);
	}
	response.write('\n}');
	response.write('\nSearch: ' + data.search);
	response.write('\nPathName: ' + data.pathname);
	response.write('\nHref: ' + data.href);
	response.end();
}).listen(8888);
