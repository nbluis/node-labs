var fs = require('fs');

fs.writeFile('message', 'My File', function(err) {
	if (err) console.log('Error:' + err);
	console.log('File saved');
});