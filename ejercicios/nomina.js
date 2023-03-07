let salario = 3900000;
let enCasa = true;
let esDeclarante = true;
const umbral = 4000000;

let retefuente = 0;
let eps = null;
let pension = null;
let impuestoSolidaridad = 0;
// determinar si gana mas de 4000000 

if (salario >= umbral) {
    retefuente = calcularRetefuente(salario);
    impuestoSolidaridad = calcularImpuestoSolidaridad(salario);
}

eps = calcularEps(salario);
pension = calcularPension(salario);

if (enCasa ){
    salario = calcularBonoExtraLegal(salario);
}

const salarioNeto = calcularSalarioNeto();

console.log("el salario neto es " + salarioNeto);


function calcularRetefuente () {
    return salario*0.05;
}

function calcularImpuestoSolidaridad(){
    return salario*0.01;
}

function calcularEps() {
    return salario*0.04;
}

function calcularPension() {
    return salario*0.04;
}

function calcularBonoExtraLegal () {
    return salario + 100000;
}

function calcularSalarioNeto () {
    return salario - retefuente - eps - pension - impuestoSolidaridad;
}


// Hoisting -> Elevacion
