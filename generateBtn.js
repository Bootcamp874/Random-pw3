// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var specialCharacter = ["!", "@", "#", "&", "%", "^", "&", "*", "()","?"];
var integerNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var bigLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var littleLetter =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];



function generatePassword() {
  var pwLength = 0;
  while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {

    pwLength = promptUser("How long do you want your password to be ?");
    var isaNumber = !isNaN(pwLength);
    if (!isaNumber) {
      alert("Please enter a number !");
      continue;
    } else {
      pwLength = parseInt(pwLength);
      if (pwLength < 8 || pwLength > 128) {
        alert("Please enter a number between 8 and 128 !");
      }
    }
  }
  return "123 ";



}

function promptUser(question) {
confirm(question);
};

function generatePassword(){
  
}

function generatePassword()  
  var wantsNumber = confirm('Do you want numbers in your password?');
  if (wantsNumber === true) {
    pwLength++;
    else {
      alert('You need a strong password!');
    }
  };
return

function generatePassword() {
  var needsSpecialC = confirm('Do you want special characters ?');
  if (needsSpecialC === true) {
    pwLength++;
  }
};
return

function generatePassword() {
  var littleLetter = confirm('Do you want lowercase letters ?');
  if (littleLetter === true) {
    pwLength++;
  }
}; return

function generatePassword() {
  var bigLetter = confirm('do you want uppercase letters ?');
  if ( bigLetter === true) {
    pwLength++;
  }
}

function generatePassword () {
passwordText.value = wantsNumber + needsSpecialC + littleLetter + bigLetter ;
}


/*
promptUser('Do you want numbers in your password?');
 promptUser('Do you want special characters?');
 promptUser('Do you want lowercase letter?');
 promptUser('Do you want uppercase letters?');

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

    // GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// 1. ask Q and store the results in var and when all the Q are answered then generate pw 
// use if statment to randomly find 
/* After all the questions are answered, use those answers to determine the set of characters to create your password from
6:25
meaning, if they want all 4 kinds, make a combination of all the characters
6:25
so it would be a mashup of special characters, numbers, lowercase, and uppercase
6:26
// i can concatenate all results of the functions 
Then create a loop counting down from the length of the password
6:26
for (var i = 0; i < passwordLength; i++)
6:27
then in the loop, generate a random number between 0 and the length of your character list

Sandra de la Torre  6:27 PM
Thanks so much !

Brian D  6:27 PM
and pull that character and append it to your password*
