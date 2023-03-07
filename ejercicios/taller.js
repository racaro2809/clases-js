let num1 = 4;
let num2 = 8;

function sumar(num1, num2) {
    return num1 + num2;
}
const resultado = sumar(num1, num2);
console.log("la suma da como resultado", resultado);


// num % 2 
let numero = 24

function esDivisiblePorDos(numero) {
    if (numero % 2 == 0) {
        console.log(`el numero ${numero} es divisible entre 2`)
    }
    else {
        console.log(`el numero ${numero} no es divisible entre 2`)
    }
}

esDivisiblePorDos(numero);

let numeroRandom = 5423557456;

esDivisiblePorDos(numeroRandom);

//export { esDivisiblePorDos };

//si son mas de 100 se necesitan 2 autobuses
//si son mas de 100 el costo es 65,000 3bus
//de 50 a 99 es de 70,000 2bus
//de 30 a 49 es 95,000 un  1bus 
//el costo del bus es de 400,000  

let estudiantes = 29;
let buses = [1, 2, 3];
let intervalos = [[30,49],
                [50,99],
                [100,140]]
let costoTotal = null;
let estudiantesSuficientes = true

function calcularValorExcursion (numeroEstudiantes) {
    if (numeroEstudiantes >= intervalos[0][0] && numeroEstudiantes <= intervalos[0][1]) {
        costoTotal = numeroEstudiantes * 95000 + buses[0] * 400000
    }
    else if (numeroEstudiantes >= intervalos[1][0]  && numeroEstudiantes <= intervalos[1][1] ) {
        costoTotal = numeroEstudiantes * 70000 + buses[1] * 400000
    }
    else if (numeroEstudiantes >= intervalos[2][0]  && numeroEstudiantes <= intervalos[2][1] ) {
        costoTotal = numeroEstudiantes * 55000 + buses[2] * 400000
    }
    else {
        estudiantesSuficientes = false
        console.log("se jodieron papis se cancela la vuelta");
    }
    
}
calcularValorExcursion(estudiantes);
if (estudiantesSuficientes) console.log("El Costo Total Es", costoTotal);


