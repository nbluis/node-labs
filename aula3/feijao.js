var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Panela() {}
util.inherits(Panela, EventEmitter);

Panela.prototype.cozinhar = function(prato) {
	var self = this;
	console.log('Cozinhando ' + prato);
	
	setTimeout(function() {
		self.emit("Comida Pronta", prato)
	}, 5000);
}

var panela = new Panela();

panela.on('Comida Pronta', function(prato) {
	console.log(prato + ' esta pronto');
});

panela.cozinhar('Feijao');