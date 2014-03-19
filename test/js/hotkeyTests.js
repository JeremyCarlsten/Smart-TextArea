(function() {
  $(document).ready(function() {
    var demoText, setupTextarea, triggerHotkeys;
    demoText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, magnam minus necessitatibus nisi possimus repellat ut. Amet architecto consequuntur dignissimos dolores, et in iure maxime, quaerat qui quisquam rerum voluptates.";
    setupTextarea = function(text) {
      if (text === null) {
        demoText = "Sample Text.";
      } else {
        demoText = text;
      }
      return $("<textarea>" + demoText + "</textarea>");
    };
    triggerHotkeys = (function(_this) {
      return function(keyString) {
        var keys;
        keys = keyString.split("+");
        return console.log(keys);
      };
    })(this);
    test("textAreaSetup", (function(_this) {
      return function() {
        return equal(setupTextarea('John \n Doe').val(), "John \n Doe", "Textarea was setup.");
      };
    })(this));
    return test("removeLine", (function(_this) {
      return function() {
        triggerHotkeys("ctrl+y");
        return equal($(setupTextarea()).removeLine(), "John Doe", "Textarea was setup, next up actually write some tests :P");
      };
    })(this));
  });

}).call(this);
