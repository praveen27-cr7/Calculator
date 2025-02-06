let input = document.querySelector("input")

function addVal(elemrntVal){
    
     input.value += elemrntVal
}

function percent(){
     input.value /= 100
}


function clearVal(){
     input.value = ""
}

function delVal(){
     input.value =  input.value.slice(0, length-1)
}

function evaluateVal(){
    input.value = eval(input.value)

}
