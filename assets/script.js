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



function hi() { console.log('hi') }

document.getElementsById('length').addEventListener("input", function () { console.log(length.value) })

generatePassword = document.querySelector('#generatePassword')
generatePassword.addEventListener('click', function () {
    specialCharacterCheck();
})


// console.log(document.querySelector('#atSymbol').checked);


// // Special character prompt
// var specialCharacter = prompt("Which special characters are to be included, leave empty if none, do not include spaces")

// if (!specialCharacter.includes(" ")) { console.log(true) } else { console.log(false) }

// const checker = value =>
//     !['banana', 'apple'].some(element => value.includes(element));

// console.log(specialCharacter.filter(checker));