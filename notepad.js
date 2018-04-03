(function(exports) {
  function Notepad() {

  };
    Notepad.prototype.createNote = function() {
      var note = new Note()
      return note
    }
  exports.Notepad = Notepad;
})(this);
