// function testNotepadSave() {
//   var notepad = new Notepad();
//   notepad.saveNote()
//   assert.isTrue(notepad.notes !== 0);
// };

function testNotepadCreate() {
  var notepad = new Notepad();

  assert.isTrue(notepad.createNote() instanceof Note);
};

testNotepadCreate();
