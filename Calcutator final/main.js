
        let expression = '';
        let input =   document.getElementById('display')

        function addVal(value) {
            expression += value;
            input.value = expression;
        }

        function clearVal() {
            expression = '';
           input.value = '';
        }

        function evaluateVal() {
            try {
                let result = new Function('return ' + expression)();
                input.value = result;
                expression = result.toString();
            } catch (error) {
                input.value = 'Error';
            }
        }
   
        function percent(){
            input.value /= 100
       } 


       function delVal(){
    
        input.value =  input.value.slice(0, length -1)
        expression = input.value
   }

   