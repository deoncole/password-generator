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

//boolean to check if the object's values need to be reset
var resetReady = true;

// create a function to check that the input for password length is between 8 and 128
var passwordLength = function (lengthCheck){
  debugger;
  if (lengthCheck < 8){
    window.alert("Your password cannot be less than 8 characters");
    generatePassword();
  } else if (lengthCheck > 128){
    window.alert("Your password cannot be more than 128 characters");
    generatePassword();
  } else {
    passwordInfo.count = lengthCheck;
    resetReady = false;
  };
};

//create a function to confirm what the user wants and store the info into the object infoArray using a for loop in a if statement
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

//create a function to confirm if the user wants to use special charaters in their password using a prompt and a if statement and store the values within the object
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

//create a function to confirm if the user wants to use lower case charaters in their password using a prompt and a if statement and the values within the object
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

//create a function to confirm if the user wants to use lower case charaters in their password using a prompt and a if statement and the values within the object
var addUpperCase = function (){
  var putUpperCase = window.confirm("Would you like to add Uppercase letters to your password?");
  
  if (putUpperCase) {
    passwordInfo.addUpperCase = true;
    putConfirmInfo(passwordInfo.alpha, true);
  } else{
    passwordInfo.addUpperCase = false;
  };
  return;
};

//create a function to confirm if the user wants to use lower case charaters in their password using a prompt and a if statement and the values within the object
var addNumbers = function (){
  var putNumbers = window.confirm("Would you like to add Numbers to your password?");

  if (putNumbers) {
    passwordInfo.addNumber = true;
    putConfirmInfo(passwordInfo.numbers, false);
  } else{
    passwordInfo.addUpperCase = false;
  };
  return;
};


//create a function to start the password generation process
var generatePassword = function (){
  var passwordCount = window.prompt("How long would you like your password to be? \r\n Type a number between 8 - 128");
  
  //call the various functions to get the input/selections from the user. Pass the input from the passwordCount into the password length function to check the amount chosen
  passwordLength(passwordCount);
  checkSpecialChar();
  addLowerCase();
  addUpperCase();
  addNumbers(); 

  //local empty array to hold the selected characters
  var newPassword = [];

  //use a for loop to generate the random characters for the password based upon the user's selection
  for(var i=0; i < passwordInfo.count; i++){
    var anyChar = Math.floor(Math.random() * passwordInfo.infoArray.length);
    //insert the random selected characters into the local empty array
    newPassword.push(passwordInfo.infoArray[anyChar]);
  }

  //variable to hold the new completed password, use the to string method to set it as a tring and the replace all method to remove the commas
  var completePass = newPassword.toString().replaceAll(",", "");
  
  //return the completed password
  return completePass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //if statement to check if the objects need to be reset or not
  if(resetReady){
    //get the password from the generatePassword function
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    //set the password to the text field
    passwordText.value = password;

  } else {
    passwordInfo.count = "";
    passwordInfo.addSpecChar = "";
    passwordInfo.addLowerCase = "";
    passwordInfo.addUpperCase = "";
    passwordInfo.addNumber = "";
    passwordInfo.infoArray = [];
    resetReady = true;
    //get the password from the generatePassword function
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    //set the password to the text field
    passwordText.value = password;
  };

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
