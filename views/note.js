(function(exports) {
  var noteNumber = 1;
  var notepad = new Notepad()

  function createNote() {

    var newNote = notepad.createNote();
    newNote.text = document.getElementById("note").value

    if (sessionStorage.notes) {
      notes = JSON.parse(sessionStorage.getItem('notes'));
    } else {
      notes = [];
    }
    notes.push(newNote)
    sessionStorage.setItem('notes', JSON.stringify(notes));
    noteNumber++;
  };

  exports.createNote = createNote
})(this);
