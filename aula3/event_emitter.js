var EventEmitter = require("events").EventEmitter;

function eventHandler(param) {
	console.log('evento disparado: ' + param);
}

var evento = new EventEmitter();
evento.on('qualquerEvento', eventHandler);
console.log(evento.listeners('qualquerEvento'));

evento.emit('qualquerEvento', 'Mensagem');

evento.removeListener('qualquerEvento', eventHandler);
console.log(evento.listeners('qualquerEvento'));

evento.emit('qualquerEvento', 'Nao vai sair mensagem');
