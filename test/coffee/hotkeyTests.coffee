$(document).ready ->
  demoText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, magnam minus necessitatibus nisi possimus repellat ut. Amet architecto consequuntur dignissimos dolores, et in iure maxime, quaerat qui quisquam rerum voluptates."

  setupTextarea = (text) ->
    if(text)
      demoText = text

    $("<textarea>#{demoText}</textarea>")

  test "textAreaSetup", =>
    equal(setupTextarea('John Doe').val(), "John Doe", "Textarea was setup, next up actually write some tests :P")
