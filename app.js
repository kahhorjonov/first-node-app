// const logger = require("./logger");

// logger.log("message");

const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const user = os.userInfo();

console.log(user);
