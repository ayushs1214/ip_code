const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('customEvent', (arg1, arg2) => {
    console.log(`Custom Event Received: ${arg1} and ${arg2}`);
});

myEmitter.emit('customEvent', 'Hello', 'World');

myEmitter.once('oneTimeEvent', () => {
    console.log('This listener will execute only once.');
});

myEmitter.emit('oneTimeEvent');
myEmitter.emit('oneTimeEvent'); 

function myListener(arg1) {
    console.log(`Listener to be removed: ${arg1}`);
}

myEmitter.on('removeEvent', myListener);
myEmitter.emit('removeEvent', 'First Call');
myEmitter.removeListener('removeEvent', myListener);
myEmitter.emit('removeEvent', 'Second Call'); 
