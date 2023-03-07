function Burbuja(lista) {
    let n, x, y, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (y = 1; y < n; y++) {
        for (x = 0; x < (n - y); x++) {
            if (lista[x] < lista[x + 1]) {
                aux = lista[x];
                lista[x] = lista[x + 1];
                lista[x + 1] = aux;
            }
        }
    }
    return lista
}
let lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
const resultado =  Burbuja(lista);
console.log(resultado);