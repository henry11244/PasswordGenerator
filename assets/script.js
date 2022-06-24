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
length.addEventListener("change", function () {
    if (length.value > 128 || length.value < 8) {
        alert("Silly goose, please follow password length instructions");
        passwordBox.innerText = 'Only people that follow directions may use the Password Generator'
    }
    else {
        passwordLength = length.value
    }
})

var password = []
var passwordBox = document.querySelector('#passwordBox')


generatePassword = document.querySelector('#generatePassword')

// Script to create password, active on button click using checkboxed
generatePassword.addEventListener('click', function () {

    // Checkbox function from above
    checkBoxes();
    if (PasswordArray.length === 0) {
        alert('You did not select any password options.... What do you want me to generate?');
        passwordBox.innerText = "You didn't select any parameters below... so you get no password generation......"
    }
    else {
        //loop to add letters to the password array one at a time 
        for (let i = 0; i < passwordLength; i++) {
            var newArray = PasswordArray[random(PasswordArray.length)];
            var newCharacter = newArray[random(newArray.length)];
            password.push(newCharacter);
        }

        // to present generated passsword on webpage
        passwordBox.innerText = password.join('')

        // to reset arrays after each run
        setInterval(function () { SpecialCharacter.splice(0, SpecialCharacter.length) }, 100)
        setInterval(function () { PasswordArray.splice(0, PasswordArray.length) }, 100)
        setInterval(function () { password.splice(0, password.length) }, 100)
    }
})

generatePasswordPrompt = document.querySelector('#generatePasswordPrompt')

// Script to create password, active on button click using prompts
generatePasswordPrompt.addEventListener('click', function () {

    // Prompts
    let Len = prompt("How long is the password (8 to 128)");
    if (Len > 128 || Len < 8) {
        alert("Silly goose, please follow password length instructions");
        passwordBox.innerText = 'Only people that follow directions may use the Password Generator'
    }


    else {
        var Num = confirm("Use Numbers?");
        var Upper = confirm("Use Uppercase?");
        var Lower = confirm("Use Lowercase?");
        var Spec = confirm("Use Special Character?");

        // Add arrays to Password Arrays
        if (Num) { PasswordArray.push(NumberArray) }
        if (Upper) { PasswordArray.push(alphabetCap) }
        if (Lower) { PasswordArray.push(alphabetLower) }
        if (Spec) { PasswordArray.push(['!', '@', '?', '#', '$', '%', '&']) }

        //loop to add letters to the password array one at a time 
        for (let i = 0; i < Len; i++) {
            var newArray = PasswordArray[random(PasswordArray.length)];
            var newCharacter = newArray[random(newArray.length)];
            password.push(newCharacter);
        }

        // to present generated passsword on webpage
        passwordBox.innerText = password.join('')

        // to reset arrays after each run
        setInterval(function () { SpecialCharacter.splice(0, SpecialCharacter.length) }, 100)
        setInterval(function () { PasswordArray.splice(0, PasswordArray.length) }, 100)
        setInterval(function () { password.splice(0, password.length) }, 100)
    }
})


