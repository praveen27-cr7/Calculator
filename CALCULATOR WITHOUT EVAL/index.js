//press one number - we save that number
//prees the operator -we save that operator
//press second number - save second number
//press equal sign - save calculation

let input = document.querySelector("input")
let firstNumber
let secondNumber
let step = 0
let operator
let result = 0


let numArray = []
let secondNumArray = []

function addvalue(num){
    if(step === 0 || step === 1){
        numArray.push(num)
        step = 1
        firstNumber = Number(numArray.join(''))//merge into one string
        input.value = firstNumber
    }else if ( step === 2  ){
        secondNumArray.push(num)
        secondNumber = Number(secondNumArray.join(''))
        input.value = secondNumber
    }
    }
function getOperator(op){
    step = 2
    operator = op
    input.value =  operator 
}

function clearValue(){
    input.value = ''
    firstNumber = null
    secondNumber = null
    step = 0
    operator = null
    result = 0
    numArray = []
    secondNumArray = []    
}

function deleteVal(){
    input.value = input.value.slice(0,length-1)
}

const caculateEquals = () => {
    if (operator === '+'){
        result = firstNumber + secondNumber
        input.value = result
    }else if (operator === '-'){
        result = firstNumber - secondNumber
        input.value = result
    }else if(operator === '*'){
       result = firstNumber * secondNumber
       input.value = result
    }
    else if ( operator === '/' ){
        result = firstNumber/secondNumber
        input.value = result
    }
    else if ( operator === '%' ){
        result = firstNumber % secondNumber
        input.value = result
    }
    
}