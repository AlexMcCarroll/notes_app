var launch = new Launch()

window.onload = function() {
  document.getElementById("empty-note").style.visibility = "hidden";

  function createLaunch() {

    launch.start();
    var arrLength = launch.showNotepads().length;
    for (var i = 0; i < arrLength; ++i) {
      var notepad = launch.showNotepads()[i];
      var img = new Image();
      img.src = "https://image.ibb.co/c6gK6c/Notepad_Pen_81380_1416860234_375_513.jpg";
      img.onclick = function() {
        console.log(notepad);
        document.getElementById("notePadPics").style.visibility = "hidden";
        document.getElementById("createNotepad").style.visibility = "hidden";
      }
      document.getElementById("notePadPics").appendChild(img);
    }
  };
  createLaunch();
}

function createNotepad() {
  document.getElementById("createNotepad").onclick = console.log(launch.createNewNotepad());
  console.log(launch.showNotepads());
}
