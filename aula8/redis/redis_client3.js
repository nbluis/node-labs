var redis = require('redis')
var client = redis.createClient();

client.select(1);

client.flushdb();

client.hset('aluno', 'nome', 'Joao');
client.hset('aluno', 'idade', 20);

client.hget('aluno', 'nome', function(err, retorno) {
	console.log(retorno);
});

client.hkeys('aluno', function(err, keys) {
	console.log(keys);
});

setTimeout(function() {
	client.quit();
}, 1000);