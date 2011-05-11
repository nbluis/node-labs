var fs = require('fs')

fs.readFile(__dirname + "/readfile.js", function (err, data){
	if (err) console.log("Error:" + err);
	console.log("-File-");
	console.log(data.toString('utf8'));
});