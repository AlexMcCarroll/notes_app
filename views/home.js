window.onload = function() {
document.getElementById("empty-note").style.visibility = "hidden";
function createLaunch() {
  var launch = new Launch()
  launch.start();
  var arrLength = launch.showNotepads().length;
  for (var i = 0; i < arrLength; ++i) {
    launch.showNotepads()[i];
    var img = new Image();
    img.src = "https://www.ibb.co/kgw8zx";
    img.onclick = function() {
      document.getElementById("notePadPics").style.visibility = "hidden";
    }
    document.body.appendChild(img);
  }
};
createLaunch();

}
