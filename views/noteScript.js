
(function(exports) {
  var notepad = new Notepad //Create notepad

  function createNote() {
  var note = notepad.createNote() //Create note with notepad
  note.writeNote(document.getElementById("note").value) //push the text to the note
  notepad.saveNote(note); // push the note to the notepad
  console.log(notepad._notes)
  }

  exports.createNote = createNote;
})(this);

 function hideNotepad() {
   document.getElementById("empty-note").style.visibility = "hidden";
 }
