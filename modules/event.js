var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
console.log('Finished command');
});