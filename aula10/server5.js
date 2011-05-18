var connect = require('connect');
var url = require('url');

var server = connect(
	connect.favicon(),
	connect.cookieParser(),	
	connect.session({
		secret:'iwiibbi2i3ui23923928357y68qwin',
		cookie:{ maxAge:60000 }
	}),
	function(request, response) {
		var requestData = url.parse(request.url, true);
		if (!request.session.aluno) {
			request.session.aluno = requestData.query.aluno
			console.log('Novo aluno na sessao');
		} else {
			console.log('Aluno ja estava na sessao');
		}
		console.log(request.session.aluno);
		response.end();
	}
).listen(8888);
