// Random number function 
var random = (Variable) => Math.floor(Math.random() * Variable)

// Number array
var NumberArray = Array.from(Array(10).keys())

// alphabet count
const letterCount = Array.from(Array(26)).map((e, i) => i + 65);

// Capitalized letters array
const alphabetCap = letterCount.map((x) => String.fromCharCode(x));

// Lowercase letters array
const alphabetLower = alphabetCap.map(element => { return element.toLowerCase() })

// Special character array
var SpecialCharacter = []

var passwordLength = 8

// arrays of arrays for use based on which perameters are checked
var PasswordArray = []

// Check which special characters, numbers and Capitlized/Lowercased letters are selected, 
// which is used when button is pressed
function checkBoxes() {
    if (document.querySelector('#exclamationMark').checked) { SpecialCharacter.push("!") }
    if (document.querySelector('#atSymbol').checked) { SpecialCharacter.push("@") }
    if (document.querySelector('#questionMark').checked) { SpecialCharacter.push("?") }
    if (document.querySelector('#Pound').checked) { SpecialCharacter.push("#") }
    if (document.querySelector('#dollarSign').checked) { SpecialCharacter.push("$") }
    if (document.querySelector('#percent').checked) { SpecialCharacter.push("%") }
    if (document.querySelector('#andSign').checked) { SpecialCharacter.push("&") }
    if (SpecialCharacter.length !== 0) { PasswordArray.push(SpecialCharacter) };
    if (document.querySelector('#CapitalBox').checked) { PasswordArray.push(alphabetCap) }
    if (document.querySelector('#LowercaseBox').checked) { PasswordArray.push(alphabetLower) }
    if (document.querySelector('#Numbers').checked) { PasswordArray.push(NumberArray) }
}

// var LowercaseBox = document.querySelector('#LowercaseBox');
// var CapitalBox = document.querySelector('#CapitalBox')

// Password length updates
var length = document.querySelector('#length')
length.addEventListener("input", function () {
    passwordLength = length.value
})

var password = []
var passwordBox = document.querySelector('#passwordBox')

// Script to create password 
generatePassword = document.querySelector('#generatePassword')
generatePassword.addEventListener('click', function () {

    checkBoxes();
    for (let i = 0; i < passwordLength; i++) {
        var newArray = PasswordArray[random(PasswordArray.length)];
        var newCharacter = newArray[random(newArray.length)];
        password.push(newCharacter);
    }
    passwordBox.innerText = password.join('')



    // to reset arrays after each run
    setInterval(function () { SpecialCharacter.splice(0, SpecialCharacter.length) }, 100)
    setInterval(function () { PasswordArray.splice(0, PasswordArray.length) }, 100)
    setInterval(function () { password.splice(0, password.length) }, 100)
})


// console.log(document.querySelector('#atSymbol').checked);


// // Special character prompt
// var specialCharacter = prompt("Which special characters are to be included, leave empty if none, do not include spaces")

// if (!specialCharacter.includes(" ")) { console.log(true) } else { console.log(false) }

// const checker = value =>
//     !['banana', 'apple'].some(element => value.includes(element));

// console.log(specialCharacter.filter(checker));