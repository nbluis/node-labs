process.stdin.on('data', function (chunck) {
	console.log('Digitou:' +  chunck);	
});

process.stdin.resume();