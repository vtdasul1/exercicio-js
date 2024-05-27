function calcular(operacao) {
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    
    if (operacao === '+'){
    resultado = n1 + n2;
    }
    
        else if (operacao === '-'){
           resultado = n1 - n2;
        }
    
    else if (operacao === '*'){
    resultado = n1 * n2
    }
    
    else if (operacao === '/'){
    if (resultado === 0) {
    resultado = 'divisão por zero'
    } 
    else {
    resultado = n1 / n2;
    }
    }
    
    document.getElementById('resultado').innerText = `resultado: ${resultado}`;
    }