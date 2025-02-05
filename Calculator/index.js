let input = document.querySelector("input")

function addVal(elemrntVal){
    
     input.value += elemrntVal
}

function clearVal(){
     input.value = ""
}

function delVal(){
     input.value =  input.value.slice(0, length-1)
}

function evaluateVal(){
    input.value = eval(input.value)
    console.log( eval(input.value) )
}
