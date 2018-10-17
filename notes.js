console.log("Strating notes.js");

module.exports.addNote = () => {
  console.log("addNote");
  return "New Note";
};

module.exports.add = (a, b) => {
  var sum = a + b;
  return sum;
};
