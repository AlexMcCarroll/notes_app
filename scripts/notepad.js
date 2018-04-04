(function(exports) {
  function Notepad() {
    this._notes = []
    this._name = ''

  };
    Notepad.prototype.createNote = function() {
      var note = new Note()
      return note
    }

    Notepad.prototype.saveNote = function(note) {
      this._notes.push(note);
    }

    Notepad.prototype.showNotes = function() {
      return this._notes
    }
  exports.Notepad = Notepad;
})(this);
