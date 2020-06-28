//prompts for user
var passwordLength;
var speshChar;
var caps;
var lowercase;
var numbers;



// function defineLength() {
    passwordLength = prompt("How long would you like your password to be? (8-128 characters)");
    
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be between 8-128 characters!");
    } 

    userPrompts();

    generatePassword(speshChar, caps, lowercase, numbers);
        
    console.log("Password length: " + passwordLength);


                
function userPrompts() {
    speshChar = confirm("Would you like to use special characters?");
    caps = confirm("Would you like to use uppercase characters?");
    lowercase = confirm("Would you like to use lowercase characters?");
    numbers = confirm("Would you like to use numbers?");

    console.log("Special Characters? " + speshChar);
    console.log("Confirm Uppercase? " + caps);
    console.log("Confirm Lowercase? " + lowercase);
    console.log("Confirm Nuumbers? " + numbers);
}
    




function generatePassword(speshChar, caps, lowercase, numbers) {

    var generatedPassword = "";

    if (speshChar == false &&
        caps == false &&
        lowercase == false &&
        numbers == false) 
        return alert("At least one character type must be selected!");
        

    if (speshChar === true) {
        for (var i = 0; i < passwordLength; i++) {
            var speshCharEl = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
            generatedPassword += speshCharEl; 
        }
    }

    if (caps === true) {
        for (var i = 0; i < passwordLength; i++) {
            var capsEl = capsArray[Math.floor(Math.random() * capsArray.length)];
            generatedPassword += capsEl; 
        }
    }

    if (lowercase === true) {
        for (var i = 0; i < passwordLength; i++) {
            var lowercaseEl = lettersArray[Math.floor(Math.random() * lettersArray.length)];
            generatedPassword += lowercaseEl; 
        }
    }

    if (numbers === true) {
        for (var i = 0; i < passwordLength; i++) {
            var numbersEl = numbersArray[Math.floor(Math.random() * numbersArray.length)];
            generatedPassword += numbersEl; 
        }
    }





    console.log(generatedPassword);

}


var lettersArray = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var capsArray = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var numbersArray = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var specialCharArray = ("!", "@", "#", "$", "%", "&", "*", ".", "?", "_", "-", "+", "=", "/");
















//while loop to confirm that user will use at least one of the conditionals otherwise the prompts will reset

//generate password with characters selected by user in the prompts in random order
// var password = {
//     letters = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),
//     numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9),
//     specialChar = ("!", "@", "#", "$", "%", "&", "*", ".", "?", "_", "-", "+", "=", "/"),
//     length = (document.querySelector("selectLength")),
//     generatePassword: function() {
//         alert(this.length + this.numbers + this.specialChar + this.letters);

//         console.log(password)
// }

    




//items for reference

//arrays of characters

// var arrayLength1 = letters.length;
// var arrayLength2 = numbers.length;
// var arrayLength3 = specialChar.length;




// // example of a random number generator in the console log
// for (var i = 0; i < 128; i++) {
//     // Generate a random number between 1 and 10
//     // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
//     var num = Math.floor(Math.random() * 128) + 8;

//     // Display in console
//     console.log(num);
//   }
