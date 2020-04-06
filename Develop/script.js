// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  //User input
  var numValid = false;
  var num;
  while(!numValid) //Input for the length of the password
  {
    num = prompt("How long do you want your password to be? Please input a number.");
    num = num*1;
    if(typeof(num)=== "number")//Checks if the input is a number.
    {
      numValid = true;
    }
    else
    {
      alert("Please type a number.");
    }
    if(numValid && num >= 8 && num <=108)
    {

    }
    else
    {
      numValid = false;
      alert("Passwords must be between 8 and 108 characters.");
    }
  }
  var usableCharacters = [];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S", "T", "U","V","W","X","Y", "Z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var specialChars = ["!","@","#","$","%","^","&","(",")","-","_","+","=","|",";",":"];
  while(usableCharacters.length === 0) //Makes sure the user includes at least one set.
  {
    var useLowercase = confirm("Do you want your password to include lowercase letters?");
    var useUppercase = confirm("Do you want your password to include uppercase letters?");
    var useNumbers = confirm("Do you want your password to include numbers?");
    var useSpecial = confirm("Do you want your password to include special characters?");
    if(useLowercase)
    {
      usableCharacters.push(lowercase);
    }
    if(useUppercase)
    {
      usableCharacters.push(uppercase);
    }
    if(useNumbers)
    {
      usableCharacters.push(numbers);
    }
    if(useSpecial)
    {
      usableCharacters.push(specialChars);
    }

    if(usableCharacters.length === 0)
    {
      alert("You need to put something in there!");
    }
  }

  var password = "";
  for(var i = 0; i < num; i++)
  {
    var chosenSymbolIndex = Math.floor(Math.random*usableCharacters.length);
    var chosenSymbol = usableCharacters[chosenSymbolIndex];
    password = password.concat(chosenSymbol);
  }

  return password;


}
