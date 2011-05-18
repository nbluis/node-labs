var connect = require('connect');
var url = require('url');
var RedisStore = require('connect-redis');

var server = connect(
	connect.favicon(),
	connect.cookieParser(),	
	connect.session({
		secret:'iwiibbi2i3ui23923928357y68qwin',
		store: new RedisStore()
	}),
	function(request, response) {
		var requestData = url.parse(request.url, true);
		if (!request.session.views) request.session.views = 0;
		request.session.views++;
		response.write('Views:' + request.session.views);
		response.end();
	}
).listen(8888);
