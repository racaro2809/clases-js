let n1 = 5;
let n2 = 3; 

function sumar1(num1, num2) {
    return num1 + num2;
}

let resultado = sumar1(n1,n2);

console.log(resultado);

// Arrow function -> Funcion Flecha
// Scope

// let y const tienen un scope (alancance) de bloque
let orco = "Pepito";

const sumar2 = (num1, num2) => {
    console.log(orco);
    return num1 + num2;
}

const result = sumar2(n1, n2);
console.log(orco);
console.log(result);