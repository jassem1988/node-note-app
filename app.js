console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

var add = notes.add(9, 10);
console.log(add);

// var user = os.userInfo();

// fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//   if(err) {
//     console.log("Unable to write to file");
//   }
// });
