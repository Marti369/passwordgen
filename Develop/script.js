// this declares the variables and id selectors from html
var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById('characterAmountNumber')

var includeUppercaseElement = document.getElementById('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordGeneratorForm')
var passwordDisplay = document.getElementById('passwordDisplay')

//this array delcares all possible characters for our function
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)


//this will link when we change the slider the number box changes
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


//this function is delcared to pull the array of characters
function arrayFromLowToHigh(low, high) {
    var array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}


function syncCharacterAmount(e) {
    var value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}