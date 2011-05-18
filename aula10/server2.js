var connect = require('connect');

var server = connect(
	connect.favicon(),
	connect.bodyParser(),
	function(request, response) {
		console.log(request.body);
		response.end();
	}
).listen(8888);
