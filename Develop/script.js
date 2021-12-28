// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays for password characters 

var uppercase_letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowercase_letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var special_characters = ["!","/","#","@","&","?","$","%"];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// Write funciton to generate random password 

var generatePassword = function(){
  
  // prompt user to enter length of password 
  var confirmLength = (prompt("How many characters do you want your password to be? Please enter a number between 8 and 128."));

  // make sure user input a password length between 8 and 128
  while(confirmLength < 8 || confirmLength > 128){
    alert("Password must be between 8 and 128 characters");
    var confirmLength = (prompt("How many characters do you want your password to be? Please enter a number between 8 and 128."))
  }

  // Determine parameters of password 
  var confirmSpecialCharacters = confirm("Click OK if you want your password to contian special characters.");
  var confirmNumbers = confirm("Click OK if you want your password to contain numbers.");
  var confirmLowerCase = confirm("Click OK if you want your password to contain lower case characters.");
  var confirmUpperCase = confirm("Click OK if you want your password to contain upper case characters. ");
    // make sure user includes at least one parameter 
    while(confirmSpecialCharacters === false && confirmNumbers === false && confirmLowerCase === false && confirmUpperCase === false){
      alert("You must choose one option to create your password");
      var confirmSpecialCharacters = confirm("Click OK if you want your password to contian special characters.");
      var confirmNumbers = confirm("Click OK if you want your password to contain numbers.");
      var confirmLowerCase = confirm("Click OK if you want your password to contain lower case characters.");
      var confirmUpperCase = confirm("Click OK if you want your password to contain upper case characters. ");
    }

  // Create array to contain password character choices
  var passwordCharacters = []
  
  // special characters
  if (confirmSpecialCharacters){
    passwordCharacters = passwordCharacters.concat(special_characters)
  }

  // numbers
  if (confirmNumbers){
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  // lower case letters
  if (confirmLowerCase){
    passwordCharacters = passwordCharacters.concat(lowercase_letter)
  }

  // upper case letters
  if(confirmUpperCase){
    passwordCharacters = passwordCharacters.concat(uppercase_letters)
  }

    console.log(passwordCharacters)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
