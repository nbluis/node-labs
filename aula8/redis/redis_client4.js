var redis = require('redis')
var client = redis.createClient();

client.select(1);

client.flushdb();

client.lpush('aluno', 'Juquinha');
client.rpush('aluno', 'Eduardo');
client.rpush('aluno', 'Joaozinho');

client.llen('aluno', function(err, retorno) {
	console.log('Total de alunos:' + retorno);
});

client.lpop('aluno');
client.rpop('aluno');

client.llen('aluno', function(err, retorno) {
	console.log('Total de alunos:' + retorno);
});

client.lrange('aluno', 0, -1, function(err, alunos) {
	alunos.forEach(function(aluno) {
		console.log('Aluno:' + aluno);
	});
	console.log('##-##');
});

client.lpush('aluno', 'Juquinha');

client.lrange('aluno', 0, -1, function(err, alunos) {
	alunos.forEach(function(aluno) {
		console.log('Aluno:' + aluno);
	});
});

setTimeout(function() {
	client.quit();
}, 1000);