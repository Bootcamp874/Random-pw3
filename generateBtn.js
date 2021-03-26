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
var finalPw = '';



function generatePassword() {
  newArray = []; 
  finalPw = ''; 
  
  
  
  
  var userAnswer = promptUser();
  console.log(userAnswer);
  gettingRandom(userAnswer);
  console.log(newArray);
  return finalPw ;  // to do - return generated password 
  // take in options 
} 

function promptUser(){
  var pwLengthStr = prompt('How many characters do you want in your password ?');
  var wantsNumber = confirm('Do you want numbers in your password?');
  var specialChar = confirm('Do you want special characters?');
  var smallLetter = confirm('Do you want lowercase letters?');
  var bigLetter = confirm('Do you want uppercase letters?');
  var pwLength = parseInt(pwLengthStr);
  
  
  //put my object here,
  
  var userAnswer = {
    pwLength : pwLength,
    wantsNumber: wantsNumber,
    specialChar: specialChar,
    smallLetter: smallLetter,
    bigLetter: bigLetter
    
  }
  return userAnswer;
  
}

function gettingRandom (userAnswer) {
  
  if (userAnswer.wantsNumber === true) {
      newArray = newArray.concat(integerNum);
  } 
  if (userAnswer.specialChar === true) {
    newArray = newArray.concat(specialCharacter);
  } 
  if (userAnswer.bigLetter === true) {
    newArray = newArray.concat(biggieLetter);
  } 
  if (userAnswer.smallLetter === true) {
    newArray = newArray.concat(littleLetter);
  }
  
  for (var i=0; i < userAnswer.pwLength; i++) {
    var tryingTogetpw = Math.floor(Math.random() * newArray.length);
    finalPw += newArray[tryingTogetpw];

  }
  
}




        
        
        
        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);