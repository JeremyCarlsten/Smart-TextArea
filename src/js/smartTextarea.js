(function() {
  var REMOVELINE_HOTKEY;

  REMOVELINE_HOTKEY = "ctrl+y";

  $.fn.removeLine = (function(_this) {
    return function(location, lineText) {
      _this.val(_this.val().replace("\n" + lineText, ""));
      return _this.setCursorPosition(location.end);
    };
  })(this);

}).call(this);
