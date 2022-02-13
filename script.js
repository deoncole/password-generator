// Assignment code here
// create an object that will hold the password information
var passwordInfo = {
  specialChar: ["\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", "\u0060", "\u007B", "\u007B", "\u007C", "\u007D", "\u007E"],
  numbers: [1,2,3,4,5,6,7,8,9,0],
  alpha: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  count: "",
  addSpecChar: "",
  addLowerCase: "",
  addUpperCase: "",
  addNumber: "",
  infoArray: []
};

// create a function to check that the input for password length is between 8 and 128
var passwordLength = function (lengthCheck){
  if (lengthCheck < 8 || lengthCheck === ""){
    window.alert("Your password cannot be less than 8 characters");
    generatePassword();
  } else if (lengthCheck > 128){
    window.alert("Your password cannot be more than 128 characters");
    generatePassword();
  } else {
    passwordInfo.count = lengthCheck;
    console.log("You chose to have your pasword " + passwordInfo.count + " long!");
  };
};

var putConfirmInfo = function (confirmInfo, isUpperCase){
  if (isUpperCase === false){
    for (var i = 0; i<confirmInfo.length; i++){
      passwordInfo.infoArray.push(confirmInfo[i]);
    }
  } else {
    for (var i = 0; i<confirmInfo.length; i++){
      passwordInfo.infoArray.push(confirmInfo[i].toUpperCase());
    }
  };
};

var checkSpecialChar = function (){
  var putSpecChar = window.confirm("Would you like to add special characters to your password?");
  
  if (putSpecChar){
    passwordInfo.addSpecChar = true;
    putConfirmInfo(passwordInfo.specialChar, false);
  } else {
    passwordInfo.addSpecChar = false;
  };
  return;
};

var addLowerCase = function (){
  var putLowerCase = window.confirm("Would you like to add Lowercase letters to your password?");

  if (putLowerCase) {
    passwordInfo.addLowerCase = true;
    putConfirmInfo(passwordInfo.alpha, false);
  } else{
    passwordInfo.addLowerCase = false;
  };
  return;
};

var addUpperCase = function (){
  var putUpperCase = window.confirm("Would you like to add Uppercase letters to your password?");
  debugger;
  if (putUpperCase) {
    passwordInfo.addUpperCase = true;
    putConfirmInfo(passwordInfo.alpha, true);
  } else{
    passwordInfo.addUpperCase = false;
  };
  return;
};

var addNumbers = function (){
  var putNumbers = window.confirm("Would you like to add Numbers to your password?");

  if (putNumbers) {
    passwordInfo.addNumber = true;
    putConfirmInfo(passwordInfo.numbers, false);
    console.log(passwordInfo.infoArray)
  } else{
    passwordInfo.addUpperCase = false;
  };
  return;
};


//create a function to start the password generation process
var generatePassword = function (){
  var passwordCount = window.prompt("How long would you like your password to be? \r\n Type a number between 8 - 128")
  // console.log(passwordCount);
  
  passwordLength(passwordCount);

  checkSpecialChar();
  addLowerCase();
  addUpperCase();
  addNumbers();
  return;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Don't need the for loop right now
  // for (var i = 0; i < passwordInfo.alpha.length; i++ ){
  //   var anyNum = Math.floor(Math.random() * passwordInfo.alpha.length);
  //   console.log(passwordInfo.alpha[anyNum])
  // }

  generatePassword();
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
