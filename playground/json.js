// var obj = {
//   name: 'Jassem'
// };
//
// var stringObj = JSON.stringify(obj); //convert obj to JSON string
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Jassem", "age": 31}';
// var person = JSON.parse(personString); // convert JSON string to  obj
//
// console.log(typeof person);
// console.log(person);

const fs = require("fs");

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

//originalNoteString
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("nodes.json", originalNoteString);

var noteString = fs.readFileSync("nodes.json");

//note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
