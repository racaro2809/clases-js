//Paso 1 Creo los datos de entrada
let numeros =[1,12,32,4,5,6,7,8,9,10];
// Creo la función
/*
1. Nombre de la función (Calcular, Dividir, Estructurar, Construir ...)
2. Defino los parametros de entrada
3. Construyo la lógica
4. Retorno el resultado con 'return' Si retorna algo
*/
function calcularPromedio(numeros) {
    let sumatoria = 0;
    let promedio = null
    for (let i = 0; i < numeros.length; i++) {
        sumatoria += numeros[i];
    }
    promedio = sumatoria / numeros.length;
    return promedio;    
}


//Como llamar o invocar una función? 
// R./ a través de su nombre

//const resultado = calcularPromedio(numeros);
//console.log(resultado);

function generarArrayAleatorio(limiteArray) {
    let arrayRandom = [];
    let numeroGenerado = null;
    for (let i = 0; i < limiteArray; i++) {
        numeroGenerado = Math.floor(Math.random() * 1000);
        arrayRandom[i] = numeroGenerado;
    }
    return arrayRandom;
}

const arrayGenerado = generarArrayAleatorio(23000000);
console.log(arrayGenerado);

const resultadoPromedioRandom = calcularPromedio(arrayGenerado);
console.log(resultadoPromedioRandom);
