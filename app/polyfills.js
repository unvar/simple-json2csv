"use strict";
/* String additions */
String.prototype.toTitleCase = function() {
  return this.replace(/\w\S*/g, function(match) {
    return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase();
  });
};
