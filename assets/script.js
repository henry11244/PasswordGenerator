// Random number function 
var random = () => Math.floor(Math.random() * Variable)

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

var passwordLength = 0

// Check which special characters are selected, which is used when button is pressed
function specialCharacterCheck() {
    if (document.querySelector('#exclamationMark').checked) { SpecialCharacter.push("!") }
    if (document.querySelector('#atSymbol').checked) { SpecialCharacter.push("@") }
    if (document.querySelector('#questionMark').checked) { SpecialCharacter.push("?") }
    if (document.querySelector('#Pound').checked) { SpecialCharacter.push("#") }
    if (document.querySelector('#dollarSign').checked) { SpecialCharacter.push("$") }
    if (document.querySelector('#percent').checked) { SpecialCharacter.push("%") }
    if (document.querySelector('#andSign').checked) { SpecialCharacter.push("&") }
}


// Password length updates
var length = document.querySelector('#length')
length.addEventListener("input", function () {
    passwordLength = length.value
})

// arrays of arrays for use based on which perameters are checked
var PasswordArray = []

// Script to create password 
generatePassword = document.querySelector('#generatePassword')
generatePassword.addEventListener('click', function () {
    specialCharacterCheck();
    if (SpecialCharacter.length !== 0) { PasswordArray.push(SpecialCharacter) };
    if (document.querySelector('#LowercaseBox').checked) { PasswordArray.push(alphabetLower) }
    if (document.querySelector('#CapitalBox').checked) { PasswordArray.push(alphabetCap) }

    // to reset special character array after each run
    setInterval(function () { SpecialCharacter.splice(0, SpecialCharacter.length) }, 1000)
    setInterval(function () { PasswordArray.splice(0, PasswordArray.length) }, 1000)
})


// console.log(document.querySelector('#atSymbol').checked);


// // Special character prompt
// var specialCharacter = prompt("Which special characters are to be included, leave empty if none, do not include spaces")

// if (!specialCharacter.includes(" ")) { console.log(true) } else { console.log(false) }

// const checker = value =>
//     !['banana', 'apple'].some(element => value.includes(element));

// console.log(specialCharacter.filter(checker));