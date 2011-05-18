var connect = require('connect');

var server = connect(
	connect.favicon(),
	connect.cookieParser(),	
	connect.methodOverride(),
	function(request, response) {
		console.log(request.cookies);
		response.end();
	}
).listen(8888);
