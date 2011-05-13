var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodejs');

var AlunoSchema = new mongoose.Schema({
	nome: { type:String, index: false, unique: true},
	idade: { type:Number, index: true}
});

mongoose.model('Aluno', AlunoSchema);
var Aluno = mongoose.model('Aluno');

Aluno.findOne({nome: 'Eduardo' }, function(err, aluno) {
	if (err) throw err;
	aluno.idade = 24;
	aluno.save();
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