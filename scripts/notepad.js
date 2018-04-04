(function(exports) {
  function Notepad() {
    this._notes = []

  };

    Notepad.prototype.saveNote = function(note) {
      this._notes.push(note);
    }
  exports.Notepad = Notepad;
})(this);
