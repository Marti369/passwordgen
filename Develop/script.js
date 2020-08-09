// this declares the variables and id selectors from html
var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById('characterAmountNumber')

var includeUppercaseElement = document.getElementById('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordGeneratorForm')
var passwordDisplay = document.getElementById('passwordDisplay')

//this will link when we change the slider the number box changes
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


function syncCharacterAmount(e) {
    var value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}