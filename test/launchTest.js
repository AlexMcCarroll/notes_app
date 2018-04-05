function testLaunchDummyData() {
  assert.isTrue(launch._notePads.length) === 4;
};

function testLaunchInstance() {
  assert.isTrue(launch._notepads[0] instanceof Notepad);
};
