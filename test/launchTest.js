function testLaunchDummyData() {
  var launch = new Launch();
  launch.start();
  assert.isTrue(launch.showNotepads().length === 4);
};

testLaunchDummyData();

function testLaunchInstance() {
  var launch = new Launch();
  launch.start();
  assert.isTrue(launch.showNotepads()[0] instanceof Notepad);
};

testLaunchInstance();
