const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('error', (err) => {
    console.log("Error Occur: ",err.message);
})

eventEmitter.emit('error', new Error("Somthing went wrong"));