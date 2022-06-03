const EventEmitter = require("event");
const emitter = new EventEmitter();

var url = "http://mylogger.io/log";

function log(message) {
  // Send and HTTP request
  console.log(message);

  //   Raise an event
  emitter.emit("messageLogged", { id: 1, url: "http://" });
}

module.exports = log;
