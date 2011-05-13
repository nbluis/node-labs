var redis = require('redis')
var client = redis.createClient();

client.select(1);

client.flushdb();

client.sadd('aluno', 'Juquinha');
client.sadd('aluno', 'Eduardo');
client.sadd('aluno', 'Eduardo');
client.sadd('aluno', 'Eduardo');
client.sadd('aluno', 'Joaozinho');

client.smembers('aluno', function(err, members) {
	members.forEach(function(member) {
		console.log(member);
	});
});

setTimeout(function() {
	client.quit();
}, 1000);