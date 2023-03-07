
// = Es igual a (Asignación)
// == Es igual a?(Es igual a ?)
// != Es diferente a ?
// += Lo que lleva mas 
// *= ej: acum *= 3 

//  x % y 
let acum = 0;
const numeros = [];
for (let i = 0; i <= 100; i++) {
    numeros[i] = i;
    /* if (i % 2 != 0) {
        acum+=i
    } */
}

//console.log(numeros);

//Map -> Itera sobre un array, y devuelve uno nuevon con ciertas caracteristicas
const numerosPorCinco = numeros.map( el =>  el * 5 );
console.log(numerosPorCinco);
//Filter -> Itera sobre un array, filtrando a partir de una condicion o más, y devuelve un nuevo array
const numerosImpares = numerosPorCinco.filter( el => el % 2 != 0 );
console.log(numerosImpares);
console.log(numerosImpares.length);

//Reduce -> Itera sobre un array, y devuelve un solo valor
const sumatoria = numerosImpares.reduce( (valorAnterior,valorActual) => 
valorAnterior + valorActual, valorIncial)

console.log(sumatoria);

//console.log(acum)