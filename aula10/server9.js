var connect = require('connect');

var server = connect(
	connect.logger(),
	function(request, response, next) {
		response.end('Sim... isso é um middleware');
	}
).listen(8888);
