var launch = new Launch()

window.onload = function() {
  document.getElementById("empty-note").style.visibility = "hidden";

  function createLaunch() {
    // var names = ["Chiaki's Notepad", "Tom's Notepad", "Alex's Notepad", "Charlene's Notepad"]
    launch.start();
    var arrLength = launch.showNotepads().length;
    for (var j = 0; j < arrLength; ++j) {
      var notepad = launch.showNotepads()[j];
      // var name = names[i];
      var img = new Image();
      img.src = "https://image.ibb.co/c6gK6c/Notepad_Pen_81380_1416860234_375_513.jpg";
      img.onclick = function() {
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
