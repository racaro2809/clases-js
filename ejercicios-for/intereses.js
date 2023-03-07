const montoInvertido = 2500;
const tasaAnual = 0.05;
const meta = 5000;

let rendimientoAcumulado = montoInvertido;
let llegoAlUmbral = false;
let cantidadAños = 0;

let primerAño = true;

while (llegoAlUmbral === false) {

    rendimientoAcumulado =
        rendimientoAcumulado + (rendimientoAcumulado * tasaAnual);

    console.log(rendimientoAcumulado);
    cantidadAños++;

    //Evalua condicion de parada
    if (rendimientoAcumulado >= meta) {
        llegoAlUmbral = true;
    }
}

console.log("Cantindad de años para llegar al umbral son", cantidadAños);