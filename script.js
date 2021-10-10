const numbers = document.querySelectorAll(".number");
console.log(numbers);

numbers.forEach((number) => {
    console.log(number)

    number.addEventListener("click", () => {
        console.log("number is pressed")
    })

    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber =''
let calculationOperator =''
let currentNumber ='0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
        inputOperator(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result = parseFloat (prevNumber) - parseFloat (currentNumber)
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber)
            break
        case "/":
            result = parseFloat  (prevNumber) / parseFloat (currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
    calculate ()
    updateScreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
}) 

const clearAll = () => {
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const percentageBtn = document.querySelector('.percentage')
percentageBtn.addEventListener('click', (event) => {
    console.log('Percentage button is pressed')
    percentage()
    updateScreen(currentNumber)
})

const percentage = () => {
    currentNumber = currentNumber / 100
}
