var connect = require('connect');

var server = connect(
	connect.favicon(),
	connect.methodOverride(),
	function(request, response) {
		console.log(request.method);
		console.log(request.originalMethod);
		response.end();
	}
).listen(8888);
