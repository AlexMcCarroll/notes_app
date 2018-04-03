function Note() {
  this._text = ''
};
  Note.prototype.writeNote = function(text) {
    this._text = text
  }

  Note.prototype.display20 = function(note) {
    return this._text.substring(0,20);
  }

  Note.prototype.display = function(note) {
    return this._text;
  }
