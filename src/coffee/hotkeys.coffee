REMOVELINE_HOTKEY = "ctrl+y"

$.fn.removeLine = (location, lineText)  =>
  this.val(this.val().replace("\n" + lineText, ""))
  this.setCursorPosition(location.end)

