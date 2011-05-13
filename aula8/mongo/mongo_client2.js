var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodejs');

var AlunoSchema = new mongoose.Schema({
	nome: { type:String, index: false, unique: true},
	idade: { type:Number, index: true}
});

mongoose.model('Aluno', AlunoSchema);
var Aluno = mongoose.model('Aluno');

Aluno.find({}, function(err, alunos) {
	if (err) throw err;
	alunos.forEach(function(registro) {
		console.log('TODOS| ' + registro.nome + ':' + registro.idade);
	});
});

Aluno.find({idade: {$gt:30} }, function(err, alunos) {
	if (err) throw err;
	alunos.forEach(function(registro) {
		console.log('MAIOR 30| ' + registro.nome + ':' + registro.idade);
	});
});

Aluno.find({nome: 'Eduardo' }, function(err, alunos) {
	if (err) throw err;
	alunos.forEach(function(registro) {
		console.log('SO Eduardo| ' + registro.nome + ':' + registro.idade);
	});
});

setTimeout(function() {
	mongoose.disconnect();
}, 3000);