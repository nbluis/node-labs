var Client = require('mysql').Client;
client = new Client();
client.host = 'localhost';
client.port = 3306;
client.user = 'root';
client.password = '1010';
client.database = 'lportal';
client.connect();

client.query('insert into meuteste(nome) values(?)', ['Eduardo'], function(err, results, fields) {
	if (err) {
		console.log('Erro:' + err);
	}
});

client.query('select nome from meuteste', function(err, results, fields) {
	results.forEach(function(row){
		console.log(row.nome);
	})
});

client.end();