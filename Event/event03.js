const EventEmitter = require('events');

class Chat extends EventEmitter{
    sendMessage(mes) {
        console.log(`message send ${mes}`);
        this.emit("Adrima");
    }
}

const chat1 = new Chat();
const chat2 = new Chat();

const chat = new Chat();

chat.on('Adrima', () => {
    console.log("I love my baby");
})

chat.sendMessage("Hello");