
function esNarciso(numero) {
    let string = numero + "";
    let num1 = string.substring(0, 1);
    let num2 = string.substring(1, 2);
    let num3 = string.substring(2, 3);

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    num1 = Math.pow(num1, 3);
    num2 = Math.pow(num2, 3);
    num3 = Math.pow(num3, 3);

    let resultado = num1 + num2 + num3
    
    if (resultado === numero) {
        return true;
    } return false;
    
}

const numero = 153;
const comoYoQuiera = esNarciso(numero); 
console.log(comoYoQuiera);

let resultadoActual = null;
let narcisos = [];

for (let i = 1; i < 1000; i++) {
    resultadoActual = esNarciso(i);
    if(resultadoActual === true) {
        narcisos.push(i);
    }    
}

console.log(narcisos);