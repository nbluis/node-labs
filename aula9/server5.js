var http = require('http');
var url = require('url')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodejs');
var AlunoSchema = new mongoose.Schema({
	nome: { type:String, index: false, unique: true},
	idade: { type:Number, index: true}
});

mongoose.model('Aluno', AlunoSchema);
var Aluno = mongoose.model('Aluno');

var server = http.createServer(function(request, response){
	var data = url.parse(request.url, true);
	var aluno = new Aluno(data.query);

	aluno.save(function(err){
		if (err) throw err
		else console.log('Aluno salvo com sucesso');
	});

	request.body = '';
	request.on('data', function(chunk) {
		request.body += chunk.toString('utf8');
	});
	request.on('end', function() {
		console.log(request.body);
		response.end('Body:' + request.body);
	});
}).listen(8888);