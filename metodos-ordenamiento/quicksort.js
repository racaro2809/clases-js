function quicksort(array) {

    if (array.length < 1) {
        return [];
    }

    let left = [];
    let right = [];
    let pivot = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else{
            right.push(array[i]);
        }
    }

    return [].concat(quicksort(left),pivot,quicksort(right));
}

function getRandomInt(max) {
    const random = Math.random() * max;
    return Math.round(random);
}

let aleatorios = [];
const limit = 10000;

for (let i = 0; i < 8 ; i++) {
    aleatorios[i] = getRandomInt(1);
}

let tiempoInicial = new Date();
console.log(quicksort(aleatorios));
let tiempoFinal =  new Date();

const tiempoTotal = tiempoFinal - tiempoInicial;

console.log(`${tiempoTotal} ms`);