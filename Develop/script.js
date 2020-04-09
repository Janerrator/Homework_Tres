

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button//
// generateBtn.addEventListener("click", writePassword);


// click the button, get prompted for password criteria
document.querySelector('.btn').addEventListener('click', function() {

  //prompt>> ask for length of password; choose length of password;    8 < password character length < 128  
  var passwordLength = prompt("How many characters should this password have? Enter number between 8 and 128");

    //TODO: how do you force the type of data input and re-ask the questions until met? switch? loop??
       // if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {}
  
  //ask for charater types to include in the password: choose lowercase, uppercase, numeric, and/or special characters 
  var lowerCase = prompt("should the password have lowercase? y/n");
  var upperCase = prompt("should the password have uppercase? y/n");
  var numeric = prompt("should the password have numbers? y/n");
  var specialCharacters = prompt("should the password have speicial characters? y/n"); 

  // validate answer, at least one character type should be selected
  var passwordRequirement = [lowerCase, upperCase, numeric, specialCharacters];  
  
  if (passwordRequirement.includes("y")) {
    alert("Thank you! your password will now generate."); 
  } else { 
    alert("You must pick at least one character type");
    //TODO: How to run same questions again when false...?
  };
});

//generate password that matches selected criteria
  // const defines a constant REFERENCE to a value. cannot change constant primitive values, but can change properties of constant objects. 
  
  const randomFunc= {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  };

  function generatePassword(lower, upper, number, symbol, length) {
    // Init pw var 
    // filter out "n" user inputs
    //loop over length call generator function for each type 
    // add final password to the password variable and return it
  }

  let generatedPassword = '';


  // generator functions. get characters and numbers from BROWSER CHARACTER SET 
  
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);   
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);   
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);   
  }

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=-_<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

//alert that password is generated 


//display generated password in the page
    // element.innerText

