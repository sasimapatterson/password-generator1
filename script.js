// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = Number(prompt("How long would you like for your password?"));
var lowerChar = confirm("Would you like lowercases in your password?");
var upperChar = confirm("Would you like uppercases in your password?");
var number = Number(prompt("Would you like numbers in your password?"));
var specialChar = prompt("Would you like special characters in your password?");


var lowercases = "abcdefghijklmnopqrstuvwxyz";
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numInput = "0123456789";
var specialInput = " ";

var finalPassword = [];


function generatePassword() {

  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 12 characters");
  } else {
    alert("Click ok to continue");
  }
  
  
  if (lowerChar === true) {

    for (var i = 0; i < passwordLength.length; i++) {
      var randomLowercases = lowercases.charAt(Math.floor(Math.random() * lowercases.length));
      finalPassword.push(randomLowercases);
    }
  }

  if (upperChar === true) {

    for (var i = 0; i < passwordLength.length; i++) {
      var randomUppercases = uppercases.charAt(Math.floor(Math.random() * uppercases.length));
      finalPassword.push(randomUppercases)
    } 
      return finalPassword;
    }
  }
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);