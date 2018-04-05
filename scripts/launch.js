(function(exports) {
  function Launch() {
    this._notepads = []
  };
  Launch.prototype.showNotepads = function() {
    return this._notepads;
  };

  Launch.prototype.showNotepadsLength = function() {
    return this._notepads.length;
  };

  Launch.prototype.start = function() {
    for (var i = 0; i < 4; ++i) {
      this._notepads.push(new Notepad)
    };
  };
  exports.Launch = Launch;
})(this);
