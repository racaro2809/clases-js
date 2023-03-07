// Arrow function
const nombreVariable = (params) => {
    // Algo hago aquí 
    // puede retornar algo como también no hacerlo
}

// Normal Function 
function nombreFuncion (params) {

}

const esPrimo = (numero) => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

let primos = [];
let numeroActual = null;
/* for (let i = 0; i < 3000; i++) {
    numeroActual = esPrimo(i);
    if(numeroActual === true) {
        primos.push(i);  
        console.log(i);
    } 
} */

const array = [
    [1,2,3,4,5,6,7,8],
    [11,12,13,14,15,16,17,18],
    [21,22,23,24,25,26,27,28],
    [31,32,33,34,35,36,37,38]
]
console.log("hola");
//console.log(array.length);
//console.log(array[3].length);

for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[x].length; y++) {
        console.log(array[x][y]);
    } 
}


//const resultado = esPrimo(43);
//console.log(primos[]);