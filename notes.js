console.log("Strating notes.js");

const fs = require("fs");

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(e) {

  }

  var duplicateNotes = notes.filter((note) => {

  });



  notes.push(note);
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = (title) => {
  console.log("Getting note", title);
};

var removeNote = (title) => {
  console.log("Remove note", title);
};

// ES5 addNote: addNote, ES6 addNote if they are have the same name
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
