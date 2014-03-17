(function() {
  $(document).ready(function() {
    var demoText, setupTextarea;
    demoText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, magnam minus necessitatibus nisi possimus repellat ut. Amet architecto consequuntur dignissimos dolores, et in iure maxime, quaerat qui quisquam rerum voluptates.";
    setupTextarea = function(text) {
      if (text) {
        demoText = text;
      }
      return $("<textarea>" + demoText + "</textarea>");
    };
    return test("textAreaSetup", (function(_this) {
      return function() {
        return equal(setupTextarea('John Doe').val(), "John Doe", "Textarea was setup, next up actually write some tests :P");
      };
    })(this));
  });

}).call(this);
