<<<<<<< HEAD:test/notepadTest.js
=======
function testNotepadCreate() {
  var notepad = new Notepad();

  assert.isTrue(notepad.createNote() instanceof Note);
};

testNotepadCreate();

>>>>>>> master:notepadTest.js
function testNotepadSave() {
  var notepad = new Notepad();
  notepad.saveNote(new Note)
  assert.isTrue(notepad._notes.length === 1);
};
testNotepadSave()
