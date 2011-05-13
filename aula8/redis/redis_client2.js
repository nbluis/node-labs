var redis = require('redis')
var client = redis.createClient();

client.select(1);

client.flushdb();

var intervalo1 = setInterval(function() {
	client.incr('contador', function(err, total){
		console.log('Total:' + total);
	});
}, 50);

var intervalo2 = setInterval(function() {
	client.decr('contador', function(err, total){
		console.log('Total:' + total);
		if (total >= 5) {
			clearInterval(intervalo1);
			clearInterval(intervalo2);
		}
	});
}, 100);

setTimeout(function() {
	client.quit();
}, 5000);