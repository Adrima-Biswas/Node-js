const EventEmitter = require("events")
const eventEmitter = new EventEmitter();

eventEmitter.once("notification", () => {
    console.log("u r hacked");
})

eventEmitter.emit("notification");

eventEmitter.emit("notification");

eventEmitter.emit("notification");

eventEmitter.emit("notification");
