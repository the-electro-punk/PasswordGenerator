const CHRrangeEl = document.getElementById('CHRrange')
const CHRnumberEl = document.getElementById('CHRnumber')

const includeUpperEl = document.getElementById('includeUpper')
const includeNumberEl = document.getElementById('includeNumber')
const includeSymbolEl = document.getElementById('includeSymbol')
const formEl = document.getElementById('passwordGenerate')

const passwordDisplayEl = document.getElementById('passwordDisplay')

const UPPERCASE_CharCode = arrayHighLow(65, 90)
const LOWERCASE_CharCode = arrayHighLow(97,122)
const NUMBER_CharCode = arrayHighLow(48,57)
const Symbol_CharCode = arrayHighLow(33,47).concat(arrayHighLow(58, 64)).concat(arrayHighLow(91,96)).concat(arrayHighLow(123,126))

CHRnumberEl.addEventListener('input', syncCHRAmount)
CHRrangeEl.addEventListener('input', syncCHRAmount)

formEl.addEventListener('submit', e => {
    e.preventDefault()
    const CHRamountEl = CHRnumberEl.value
    const UpperEl =includeUpperEl.checked
    const NumberEl =includeNumberEl.checked
    const SymbolEl =includeSymbolEl.checked
    const password = generatePassword(CHRamountEl, UpperEl, NumberEl, SymbolEl)
    passwordDisplayEl.innerText = password
    console.log("new password is " + password)
})

function generatePassword(CHRamountEl, UpperEl, NumberEl, SymbolEl) {
   
    let charcodes = LOWERCASE_CharCode
    console.log(charcodes)
    if (UpperEl) charcodes = charcodes.concat(UPPERCASE_CharCode)
    if (NumberEl) charcodes = charcodes.concat(NUMBER_CharCode)
    if (SymbolEl) charcodes = charcodes.concat(Symbol_CharCode)
    console.log(UPPERCASE_CharCode)
    console.log(LOWERCASE_CharCode)
    
    const passwordCHRs = []
    for(let i = 0; i < CHRamountEl; i++) {
    const character = charcodes[Math.floor(Math.random() * charcodes.length)]
        passwordCHRs.push(String.fromCharCode(character))
        console.log(passwordCHRs)
    }
    return passwordCHRs.join('')
}

function arrayHighLow(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
   
function syncCHRAmount(event) {
    const valueEl= event.target.value
    CHRrangeEl.value = valueEl
    CHRnumberEl.value = valueEl
}



const questions = [{
questionOne: "What is your favorite color",
questionTwo: "Who is your quest?"
}]

console.log(questions.map((el) => {
    return el.questionOne
}))

console.log(questions.forEach((questionEl) => {
    return questionEl
}))