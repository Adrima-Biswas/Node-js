const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', () => {

    console.log("First listener");
})

eventEmitter.on('greet', () => {
    console.log("Second listener");
})

eventEmitter.emit('greet');

console.log(eventEmitter.listeners('greet'));