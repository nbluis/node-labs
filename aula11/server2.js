var express = require('express');
var app = express.createServer();

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.register('.html', require('ejs'));
	app.set('view engine', 'html');
});

app.helpers ({
	describe: function(aluno) {
		return aluno.nome + ' [' + aluno.email + ']';
	}
});

app.dynamicHelpers ({
	today : function() {
		return new Date();
	}
});

app.get('/', function(request, response) {
	response.render('index', {
		alunos: [ 
			{nome: 'Eduardo', email: 'eduardo@teste.com'}, 
			{nome: 'José', email: 'jose@teste.com'}, 
			{nome: 'João', email: 'joao@teste.com'}
		]
	});
}).listen(8888);