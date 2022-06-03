const EventEmitter = require("event");
const emitter = new EventEmitter();

// Register Listeners
emitter.on("messageLogged", (arg) => {
  console.log("listener called", arg);
});

const log = require("./logger");
log("message");
