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
var biggieLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var littleLetter =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var newArray = [];



/*
function generatePassword() {
  var pwLength = 0;
  while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {

    pwLength = promptUser("How many characters do you want in your password ?");
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
*/
function generatePassword() {
  var gettingInput = promptUser();
  console.log(gettingInput)
}








function promptUser(){
var pwLengthStr = prompt('How many characters do you want in your password ?');
var wantsNumber = confirm('Do you want numbers in your password?');
var specialChar = confirm('Do you want special characters?');
var smallLetter = confirm('Do you want lowercase letters?');
var bigLetter = confirm('Do you want uppercase letters?');
var pwLength = parseInt(pwLengthStr);
//put my object here 
var userAnswer = {
pwLength : pwLength,
wantsNumber: wantsNumber,
specialChar: specialChar,
smallLetter: smallLetter,
bigLetter: bigLetter

}
return userAnswer;

};

function gettingRandom () {
  if (wantsNumber === true) {
  var getThatNum = Math.floor(Math.random() * integerNum.length);

  } if (specialChar === true) {
    var symbolPick = Math.floor(Math.random() * specialCharacter.length);

  } if (bigLetter === true) {
    var getCapital = Math.floor(math.random() * biggieLetter.length);

  } if (smallLetter === true) {
    var gettingSmall = Math.floor(Math.random() * littleLetter.length);


  }
}

newArray.push('integerNum');
newArray.push('biggieLetter');
newArray.push('littleLetter');
newArray.push('specialCharater');





    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

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
and pull that character and append it to your password*/
/*
math.floor rounds it down to the nearest whole number
math.random () gives you a number betweeen 0 and 1. use these inside a function and it will to the 4 arrays and it will randomize the selection in the top arrays 
function 
i can put my confirms in an object to store user answers and use later 

var userAnswer = {
promptuser : promtUser,
wantsNumber: wantsNumber,
specialChar: specialChar,
smallLetter: smallLetter,
bigLetter: bigLetter


}
*/