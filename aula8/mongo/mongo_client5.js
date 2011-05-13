var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodejs');

var AlunoSchema = new mongoose.Schema({
	nome: { type:String, index: false, unique: true},
	idade: { type:Number, index: true}
});

mongoose.model('Aluno', AlunoSchema);
var Aluno = mongoose.model('Aluno');

Aluno.update({'idade' : {$gt : 30}}, {$set : {'idade' : 25}}, function(err) {
	if (err) throw err;
	console.log('update realizado');
});

Aluno.find({}, function(err, alunos) {
	if (err) throw err;
	alunos.forEach(function(registro) {
		console.log('TODOS| ' + registro.nome + ':' + registro.idade);
	});
});

Aluno.update({'idade' : {$lt : 30}}, {$set : {'idade' : 32}}, function(err) {
	if (err) throw err;
	console.log('update realizado');
});

Aluno.find({}, function(err, alunos) {
	if (err) throw err;
	alunos.forEach(function(registro) {
		console.log('TODOS| ' + registro.nome + ':' + registro.idade);
	});
});

setTimeout(function() {
	mongoose.disconnect();
}, 3000);