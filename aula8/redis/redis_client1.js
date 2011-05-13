var redis = require('redis')
var client = redis.createClient();

client.select(1);

client.flushdb();

client.set('nome', 'Eduardo', function (err, retorno) {
	console.log(err);
	console.log(retorno);
});

client.get('nome', function(err, nome) {
	console.log(nome);
});

client.del('nome');

client.exists('nome', function(err, exists){
	console.log('deu certo');
});

client.quit();