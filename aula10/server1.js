var connect = require('connect');

var server = connect(
	connect.favicon(),
	connect.profiler(),
	connect.logger(),
	connect.static(__dirname + '/public')
).listen(8888);
