//prompts for user

function defineLength() {
    var passwordLength = prompt(
      "How long would you like your password to be? (8-128 characters)"
    );
  
    if (passwordLength < 8 || passwordLength > 128) {
      return alert("Password length must be between 8-128 characters!");
    }
  
    userPrompts(passwordLength);
  
    console.log("Password length: " + passwordLength);
  }
  
  function userPrompts(passwordLength) {
    var speshChar;
    var caps;
    var lowercase;
    var numbers;
  
    var questions = [speshChar, caps, lowercase, numbers];
    var prompts = [
      "Would you like to use special characters?",
      "Would you like to use uppercase characters?",
      "Would you like to use lowercase characters?",
      "Would you like to use numbers?"
    ];
    var checks = [
      "Special Characters? ",
      "Confirm Uppercase? ",
      "Confirm Lowercase? ",
      "Confirm Numbers? "
    ];
  
    for (var i = 0; i < questions.length; i++) {
      questions[i] = confirm(prompts[i]);
      console.log(checks[i] + questions[i]);
    }
  
    generatePassword(
      questions[0],
      questions[1],
      questions[2],
      questions[3],
      passwordLength
    );
  }
  
  // Fisher Yates Shuffle
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  function generatePassword(speshChar, caps, lowercase, numbers, passwordLength) {
    var generatedPassword = "";
  
    if (
      speshChar === false &&
      caps === false &&
      lowercase === false &&
      numbers === false
    )
      return alert("At least one character type must be selected!");
  
    var charTypes = 0;
  
    if (speshChar) charTypes++;
    if (caps) charTypes++;
    if (lowercase) charTypes++;
    if (numbers) charTypes++;
  
    if (speshChar === true) {
      var specialCharArray = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "&",
        "*",
        ".",
        "?",
        "_",
        "-",
        "+",
        "=",
        "/"
      ];
      for (var i = 0; i < passwordLength / charTypes; i++) {
        var speshCharEl =
          specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
        generatedPassword += speshCharEl;
      }
    }
  
    if (caps === true) {
      var capsArray = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      for (var i = 0; i < passwordLength / charTypes; i++) {
        var capsEl = capsArray[Math.floor(Math.random() * capsArray.length)];
        generatedPassword += capsEl;
      }
    }
  
    if (lowercase === true) {
      var lettersArray = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ];
      for (var i = 0; i < passwordLength / charTypes; i++) {
        var lowercaseEl =
          lettersArray[Math.floor(Math.random() * lettersArray.length)];
        generatedPassword += lowercaseEl;
      }
    }
  
    if (numbers === true) {
      var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      for (var i = 0; i < passwordLength / charTypes; i++) {
        var numbersEl =
          numbersArray[Math.floor(Math.random() * numbersArray.length)];
        generatedPassword += numbersEl;
      }
    }
  
    var passwordArray = generatedPassword.split('');
  
    console.log("Generated Password: " + generatedPassword);
  
    console.log(passwordArray);
  
    var shuffledArray = shuffle(passwordArray);
  
    var shuffledGeneratedPassword = shuffledArray.join("").slice(0, passwordLength);
  
    console.log(shuffledGeneratedPassword);
  
    document.querySelector("#password").innerHTML =
      "<h4>" + shuffledGeneratedPassword + "</h4>";
  }
  
  document.getElementById("generatepass").addEventListener("click", defineLength);