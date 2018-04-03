function testWriteNote() {
  var note = new Note();

  note.writeNote('Hello World')
  assert.isTrue(note._text === 'Hello World')
};

testWriteNote()
