var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodejs');

var AlunoSchema = new mongoose.Schema({
	nome: { type:String, index: false, unique: true},
	idade: { type:Number, index: true}
});

mongoose.model('Aluno', AlunoSchema);
var Aluno = mongoose.model('Aluno');


var aluno = new Aluno();
aluno.nome = 'Eduardo';
aluno.idade = 86;

aluno.save(function(err){
	if (err) throw err
	else console.log('Aluno salvo com sucesso');
});

var aluno = new Aluno();
aluno.nome = 'Juca';
aluno.idade = 34;

aluno.save(function(err){
	if (err) throw err
	else console.log('Aluno salvo com sucesso');
});

var aluno = new Aluno();
aluno.nome = 'Jose';
aluno.idade = 26;

aluno.save(function(err){
	if (err) throw err
	else console.log('Aluno salvo com sucesso');
});

setTimeout(function() {
	mongoose.disconnect();
}, 3000);