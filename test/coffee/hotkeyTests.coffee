keyMap = {
  Ctrl: 17,
  Alt: 18,
  Shift: 16,
  C: 67,
  Y: 89,
  D: 68,
  O:79
}

$(document).ready ->
  demoText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, magnam minus necessitatibus nisi possimus repellat ut. Amet architecto consequuntur dignissimos dolores, et in iure maxime, quaerat qui quisquam rerum voluptates."

  setupTextarea = (text) ->
    if(text == null)
      demoText = "Sample Text."
    else
      demoText = text

    $("<textarea>#{demoText}</textarea>")

  triggerHotkeys = (keyCodes) =>
    event = $.Event("keydown")
    e.which =


      test "textAreaSetup", =>
        equal(setupTextarea('John \n Doe').val(), "John \n Doe", "Textarea was setup.")

  test "removeLine", =>
#    $(textarea).trigger()
    triggerHotkeys()
    equal($(setupTextarea()).removeLine(), "John Doe", "Textarea was setup, next up actually write some tests :P")
