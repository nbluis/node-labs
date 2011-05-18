var connect = require('connect');

var server = connect(
	connect.router(function (app) {
		app.get('/', function(request, response) {
			response.end('MAIN');
		});
		app.get('/teste/:id', function(request, response) {
			response.end('ID do teste:' + request.params.id);
		});
	})
).listen(8888);

//simplifying
//server.connect().use(pattern, handler).use(anotherPattern, handler);