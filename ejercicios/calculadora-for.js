let numero1 = 9;
let numero2 = 3;

const operaciones = [
    {
        tipo: "Suma",
        simbolo : "+",
        accion: sumar(numero1, numero2)
    },
    {
        tipo: "Resta",
        simbolo : "-",
        accion: restar(numero1, numero2)
    },
    {
        tipo: "Multiplicacion",
        simbolo : "*",
        accion: multiplicar(numero1, numero2)
    },
    {
        tipo: "Division",
        simbolo : "/",
        accion: dividir(numero1, numero2)
    }
]

//let operaciones = [sumar(numero1, numero2), restar(numero1, numero2), multiplicar(numero1, numero2), dividir(numero1, numero2)];
let resultado = 0;
for (let i = 0; i < operaciones.length; i++) {
    resultado = operaciones[i].accion;
    console.log(`La ${operaciones[i].tipo} de ${numero1} ${operaciones[i].simbolo} ${numero2} es ${resultado}`);
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}
