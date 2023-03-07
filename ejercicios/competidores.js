const competidores = [
    {
        nombre: "Carlos",
        medallasOro: 1,
        medallasPlata: 0,
        medallasBronce: 4,
    },
    {
        nombre: "Camilo",
        medallasOro: 1,
        medallasPlata: 3,
        medallasBronce: 6,

    },
    {
        nombre: "Juan",
        medallasOro: 5,
        medallasPlata: 3,
        medallasBronce: 4,

    },
    {
        nombre: "Pedro",
        medallasOro: 8,
        medallasPlata: 9,
        medallasBronce: 1,

    },
    {
        nombre: "Lina",
        medallasOro: 4,
        medallasPlata: 7,
        medallasBronce: 2,

    },
    {
        nombre: "Camila",
        medallasOro: 0,
        medallasPlata: 0,
        medallasBronce: 0,

    },
    {
        nombre: "Paula",
        medallasOro: 9,
        medallasPlata: 9,
        medallasBronce: 8,

    },
    {
        nombre: "Julian",
        medallasOro: 3,
        medallasPlata: 0,
        medallasBronce: 2,

    },
    {
        nombre: "Mateo",
        medallasOro: 0,
        medallasPlata: 0,
        medallasBronce: 0,

    },
    {
        nombre: "jorge",
        medallasOro: 2,
        medallasPlata: 5,
        medallasBronce: 8,

    },
];

function calcularPorcentajeCompetidoresSinMedallas(competidores) {
    let acumuladoParticipantes = 0;
    let competidorActual = null;
    let sumatoriaMedallas = null;
    let porcentaje = 0;
    for (let i = 0; i < competidores.length; i++) {
        competidorActual = competidores[i];
        sumatoriaMedallas = competidorActual.medallasOro + competidorActual.medallasPlata + competidorActual.medallasBronce;
        if (sumatoriaMedallas === 0) {
            acumuladoParticipantes++
        };
    }
    //competidores.filter((el) => el.medallasOro + el.medallasPlata + el.medallasBronce === 0).length;    
    porcentaje = acumuladoParticipantes / competidores.length * 100; 
    return porcentaje;
}
const porcentaje = calcularPorcentajeCompetidoresSinMedallas(competidores);
console.log(`el porcentaje de competidores sin medallas es ${porcentaje}%`);






function encontrarCampeon(competidores) {
    let sumaMedallas = [];
    let medallasOro = 0;
    let medallasPlata = 0;
    let medallasBronce = 0;
    for (let i = 0; i < competidores.length; i++) {
        medallasOro = competidores[i].medallasOro;
        medallasPlata = competidores[i].medallasPlata;
        medallasBronce = competidores[i].medallasBronce;
        sumaMedallas[i] = medallasOro + medallasPlata + medallasBronce;
        //sumaMedallas.push(sumatoriaMedallas)
    }
    const valoresOrdenados = sumaMedallas.sort(compareNumbers);
    const valorMaximo = valoresOrdenados[valoresOrdenados.length - 1];
    const competidorGanador = competidores.find((el) =>
        (el.medallasOro + el.medallasPlata + el.medallasBronce) == valorMaximo
    );

    console.log(`El ganador fue ${competidorGanador.nombre}`);

}

encontrarCampeon(competidores);


function encontrarPerdedor(competidores) {
    //let medallas = [];
    //let medallasOro = 0;
    /*  for (let i = 0; i < competidores.length; i++) {
         medallasOro = competidores[i].medallasOro;
         
         medallas[i] = medallasOro;
     }; */

    const medallas = competidores.map((el) => el.medallasOro);
    const valoresOrdenados = medallas.sort(compareNumbers);
    const valorMinimo = valoresOrdenados[0];
    const competidorMenosOro = competidores.find((el) =>
        (el.medallasOro) == valorMinimo
    );

    console.log(`El que menos medallas de oro tuvo fue ${competidorMenosOro.nombre}`);

}

encontrarPerdedor(competidores);

function medallaMasGanada(competidores) {
    let medallasOro = 0;
    let medallasPlata = 0;
    let medallasBronce = 0;
    for (let i = 0; i < competidores.length; i++) {
        medallasOro += competidores[i].medallasOro;
        medallasPlata += competidores[i].medallasPlata;
        medallasBronce += competidores[i].medallasBronce;
    }
    console.log(medallasOro);
    console.log(medallasPlata);
    console.log(medallasBronce);
    const medallasAgrupadas = [
        {
            tipoMedalla: 'oro',
            acumulado: medallasOro
        },
        {
            tipoMedalla: 'plata',
            acumulado: medallasPlata
        },
        {
            tipoMedalla: 'Bronce',
            acumulado: medallasBronce
        }];

    const valoresOrdenados = medallasAgrupadas.sort((a, b) => a.acumulado - b.acumulado);
    console.log(valoresOrdenados);

    const valorMaximo = valoresOrdenados[valoresOrdenados.length - 1];
    console.log(`El tipo de medalla más ganada fue ${valorMaximo.tipoMedalla}`);
}

function compareNumbers(a, b) {
    return a - b;
}

medallaMasGanada(competidores);


