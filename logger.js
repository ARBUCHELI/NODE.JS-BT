const EventEmitter = require('events');

const uuid = require('uuid');

/* This is going to generate a random id
console.log(uuid.v4());*/

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

module.exports = Logger;