console.log("Starting app");

const fs = require("fs");
const os = require("os");

var user = os.userInfo();

console.log(user);

// fs.appendFile("greetings.txt", "Hello World!!", function (err) {
//   if(err) {
//     console.log("Unable to write to file");
//   }
// });
