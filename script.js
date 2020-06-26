var selectLength = prompt("How long would you like your password to be? (8-128 characters)");
var confirmSpeshChar = confirm("Would you like to use special characters?");
var confirmCaps = confirm("Would you like to use uppercase and lowercase characters?");
var confirmNum = confirm("Would you like to use numbers?");

if (confirmSpeshChar) {


}

if (confirmCaps) {


}

if (confirmNum) {


}

else {

}

var letters = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
var specialChar = ("!", "@", "#", "$", "%", "&", "*", ".", "?", "_", "-");
// Loop 10 times
for (var i = 0; i < 128; i++) {
    // Generate a random number between 1 and 10
    // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
    var num = Math.floor(Math.random() * 128) + 8;

    // Display in console
    console.log(num);
  }
