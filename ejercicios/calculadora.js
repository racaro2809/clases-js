const esDivisible = require("./taller.js")

let numero1 = 6;
let numero2 = 5; 

esDivisible(numero1);

function sumar (num1,num2){
    return num1+num2;
}

let resultadoSumar = sumar(numero1 , numero2);
console.log(`La suma de ${numero1} + ${numero2} es ${resultadoSumar}`);

function restar (num1,num2){
    return num1-num2;
}

let resultadoRestar = restar(numero1, numero2);
console.log(`La resta de ${numero1} - ${numero2} es ${resultadoRestar}`);

function multiplicar (num1,num2){
    return num1*num2;
}

let resultadoMultiplicar= multiplicar(numero1 , numero2);
console.log(`La multiplicacion de ${numero1} * ${numero2} es ${resultadoMultiplicar}`);

function dividir (num1,num2){
    return num1/num2;
}

let resultadoDividir= dividir(numero1 , numero2);
console.log(`La division de ${numero1} / ${numero2} es ${resultadoDividir}`);