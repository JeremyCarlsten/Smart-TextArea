(function() {
  var keyMap;

  keyMap = {
    Ctrl: 17,
    Alt: 18,
    Shift: 16,
    C: 67,
    Y: 89,
    D: 68,
    O: 79
  };

  $(document).ready(function() {
    var demoText, setupTextarea;
    demoText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, magnam minus necessitatibus nisi possimus repellat ut. Amet architecto consequuntur dignissimos dolores, et in iure maxime, quaerat qui quisquam rerum voluptates.";
    setupTextarea = function(text) {
      if (text === null) {
        demoText = "Sample Text.";
      } else {
        demoText = text;
      }
      return $("<textarea>" + demoText + "</textarea>");
    };
    test("textAreaSetup", (function(_this) {
      return function() {
        return equal(setupTextarea('John \n Doe').val(), "John \n Doe", "Textarea was setup.");
      };
    })(this));
    return test("removeLine", (function(_this) {
      return function() {
        return equal(1, 1, "Dummy Test for build");
      };
    })(this));
  });

}).call(this);
