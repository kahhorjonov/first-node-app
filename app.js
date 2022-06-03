// const EventEmitter = require("events");

// const Logger = require("./logger");
// const logger = new Logger();

// // Register Listeners
// logger.on("messageLogged", (arg) => {
//   console.log("listener called", arg);
// });

// logger.log("message");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3001);

console.log("Listening on port 3000...");
