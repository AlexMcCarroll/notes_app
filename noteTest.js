function testWriteNote() {
  var note = new Note();
  note.writeNote('Hello World')
  assert.isTrue(note._text === 'Hello World')
};

testWriteNote()

function testDisplayNote20() {
  var note = new Note();
  note.writeNote('123456789123456789!!cat')
  assert.isTrue(note.display20() === '123456789123456789!!')
};

testDisplayNote20()

function testDisplayNote() {
  var note = new Note();
  note.writeNote('123456789123456789!!cat')
  assert.isTrue(note.display() === '123456789123456789!!cat')
};

testDisplayNote()
