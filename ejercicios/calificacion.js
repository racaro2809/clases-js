let notasGeneral = [60, 80, 30, 90, 100, 30, 40, 30, 40,100];
let total;

function notas(notasGeneral) {
    for (let i = 0; i < notasGeneral.length; i++) {
        if (notasGeneral[i] >= 60) {
            console.log("aprobo");

        }
        else { console.log("reprobo") };
    }
};
notas(notasGeneral);

function calcularNotaFinal(notas) {
    let sumatoria = 0;
    let notaFinal = 0;
    const numeroNotas = notas.length;

    for (let i = 0; i < numeroNotas; i++) {
        sumatoria += notas[i]
    }
    notaFinal = sumatoria / numeroNotas;
    console.log(notaFinal);
}
calcularNotaFinal(notasGeneral);

/* function cualquierCosa (parametro1, parametro2, parametro3) {
    console.log("-----------");
    console.log(parametro1);
    console.log(parametro2);
    console.log(parametro3);
}
let p1 = 10;
let p2 = 20;
let p3 = 30;
cualquierCosa(p1, p3, p2); */