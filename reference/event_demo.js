const EventEmitter = require('events');

// Create an Emitter Class
class MyEmitter extends EventEmitter { }

// Init Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init Event
myEmitter.emit('event');