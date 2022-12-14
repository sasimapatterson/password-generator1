// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //
  var lowercases = "abcdefghijklmnopqrstuvwxyz";
  var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var symbols = "\"\"#$%&'()*+,-./:;<=>?@[\]^\`{|}~\"";
  var possibleChar = "";
  var finalPassword = "";

  var passwordLength = Number(prompt("How long would you like for your password?"));
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password must be between 8 and 128 characters");
    return generatePassword();
  }
  var lowerChar = confirm("Would you like lowercases in your password?");
  var upperChar = confirm("Would you like uppercases in your password?");
  var numbers = confirm("Would you like numbers in your password?");
  var specialChar = confirm("Would you like special characters in your password?");

  if (lowerChar !== true && uppercases !== true && numbers !== true && specialChar !== true) {
    alert("You must select at least one category. Please start again.");  
  } 


  if (lowerChar === true) {
    possibleChar = possibleChar.concat(lowercases);
    console.log(possibleChar);
  }

  if (upperChar === true) {  
    possibleChar = possibleChar.concat(uppercases);
    console.log(possibleChar);
  }

  if (numbers === true) {
    //possibleChar.push(nums);
    possibleChar = possibleChar.concat(nums);
    console.log(possibleChar);
  }

  if (specialChar === true) {
    possibleChar = possibleChar.concat(symbols);
    console.log(possibleChar);
  }
    for (var i = 0; i < passwordLength; i++) {
      
      finalPassword += possibleChar[Math.floor(Math.random() * possibleChar.length)];
     
    }
    return finalPassword;  
  }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);