console.log("Strating notes.js");

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  notes.push(note);
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
