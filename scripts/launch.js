(function(exports) {
  function Launch() {
    this._notepads = []
  };
  Launch.prototype.showNotepads = function() {
    return this._notepads;
  };

  Launch.prototype.start = function() {
    for (var i = 0; i < 4; ++i) {
      this._notepads.push(new Notepad)
    };
  };

  Launch.prototype.createNewNotepad = function() {
    var notepad = new Notepad
    this._notepads.push(notepad)
    return notepad
  };

  exports.Launch = Launch;
})(this);
