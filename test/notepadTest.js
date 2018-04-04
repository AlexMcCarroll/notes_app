function testNotepadSave() {
  var notepad = new Notepad();
  notepad.saveNote(new Note)
  assert.isTrue(notepad._notes.length === 1);
};
testNotepadSave()
