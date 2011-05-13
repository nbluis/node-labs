var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodejs');

var AlunoSchema = new mongoose.Schema({
	nome: { type:String, index: false, unique: true},
	idade: { type:Number, index: true}
});

mongoose.model('Aluno', AlunoSchema);
var Aluno = mongoose.model('Aluno');

Aluno.count({idade: {$gt:30} }, function(err, count) {
	if (err) throw err;
	console.log(count);
});

setTimeout(function() {
	mongoose.disconnect();
}, 3000);