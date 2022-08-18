// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passwordLength = Number(prompt("How long would you like for your password?"));
   if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 12 characters");
   } else {
    alert("Click ok to continue");
   }

   
   var lowerChar = confirm("Would you like lowercases in your password?");
    if (lowerChar === true) { 
      var lowercases = "abcdefghijklmnopqrstuvwxyz";
      var randomLowercases = " ";
      for (var i = 0; i < lowercases.length; i++) {
        randomLowercases = Math.floor(Math.random() * lowercases.length);

        return (randomLowercases);
      }

    }

    

  //var upperCase = prompt("Would you like uppcase letters in your password?");
  //var number = Number(prompt("Would you like numbers in your password?"));
  //var specialChar = prompt("Would you like special characters in your password?");
  return "Return sth";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);