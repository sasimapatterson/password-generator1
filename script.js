// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword() {
  //var number = confirm("Would you like numbers in your password?");
  //var specialChar = confirm("Would you like special characters in your password?");

  var numInput = "0123456789";
  var specialInput = " ";
  var finalPassword = [];

var passwordLength = Number(prompt("How long would you like for your password?"));
console.log(passwordLength);
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Password must be between 8 and 12 characters");
  return generatePassword();

} 
//else if (passwordLength > 8 || passwordLength < 128) {
 // passwordLength = Number(prompt("How long would you like for your password?"));
// } else {
//   alert("Click ok to continue");
// }

var lowerChar = confirm("Would you like lowercases in your password?");
var lowercases = "abcdefghijklmnopqrstuvwxyz";
if (lowerChar === true) {

  for (var i = 0; i < passwordLength; i++) {
    var randomLowercases = lowercases.charAt(Math.floor(Math.random() * lowercases.length));
    finalPassword.push(randomLowercases);
  }
}

var upperChar = confirm("Would you like uppercases in your password?");
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (upperChar === true) {

  for (var i = 0; i < passwordLength; i++) {
    var randomUppercases = uppercases.charAt(Math.floor(Math.random() * uppercases.length));
    finalPassword.push(randomUppercases)
  }
  return finalPassword.join('');
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