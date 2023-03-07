const infoConcurso = [
    {
        participante: {
            nombre: "Carlos",
            sexo: "M",
            categoria: "A",
        },
        trucha: {
            longitud: 30,
            peso: 400,
        }
    },
    {
        participante: {
            nombre: "Mateo",
            sexo: "M",
            categoria: "C",
        },
        trucha: {
            longitud: 25,
            peso: 300,
        }
    },
    {
        participante: {
            nombre: "Paula",
            sexo: "F",
            categoria: "B",
        },
        trucha: {
            longitud: 35,
            peso: 420,
        }
    },
    {
        participante: {
            nombre: "Carolina",
            sexo: "F",
            categoria: "B",
        },
        trucha: {
            longitud: 40,
            peso: 480,
        }
    },
    {
        participante: {
            nombre: "Cristian",
            sexo: "M",
            categoria: "C",
        },
        trucha: {
            longitud: 15,
            peso: 60,
        }
    }
];


function obtenerGeneroGanador(infoConcurso) {
    let sexo = null;
    let numeroHombres = 0;
    let numeroMujeres = 0;
    for (let i = 0; i < infoConcurso.length; i++) {
        sexo = infoConcurso[i].participante.sexo;
        if (sexo === "M") numeroHombres++;
        else numeroMujeres++;
    }
    if (numeroHombres > numeroMujeres) return "los hombres";
    else return "las mujeres";
};
const generoGanador = obtenerGeneroGanador(infoConcurso);
console.log(`Los Ganadores Son ${generoGanador}`);

function calcularLongitudPromedio(infoConcurso) {
    let promedio = null
    let valorInicial = 0

    const sumatoriaTruchas = infoConcurso.reduce(
        (acumulado, valorActual) => acumulado + valorActual.trucha.longitud
        , valorInicial)

    /* for (let i = 0; i < infoConcurso.length; i++) {
        sumatoriaTruchas += infoConcurso[i].trucha.longitud;
    } */
    promedio = sumatoriaTruchas / infoConcurso.length;
    return promedio;
}

const promedio = calcularLongitudPromedio(infoConcurso);
console.log(`el promedio de las truchas es ${promedio}cm`);


// map filter reduce

function calcularPesoTotalPorCategoria(infoConcurso) {

    // Filtra por categoria
    const concursantesCategoriaA = infoConcurso.filter((element) => element.participante.categoria === 'A');
    const concursantesCategoriaB = infoConcurso.filter((element) => element.participante.categoria === 'B');
    const concursantesCategoriaC = infoConcurso.filter((element) => element.participante.categoria === 'C');

    const valorInicial = 0;

    // Calcula sumatoria de pesos por categoria
    const sumPesoCategoriaA = concursantesCategoriaA.reduce(
        (acumulado, valorActual) => acumulado + valorActual.trucha.peso
        , valorInicial);

    const sumPesoCategoriaB = concursantesCategoriaB.reduce(
        (acumulado, valorActual) => acumulado + valorActual.trucha.peso
        , valorInicial);

    const sumPesoCategoriaC = concursantesCategoriaC.reduce(
        (acumulado, valorActual) => acumulado + valorActual.trucha.peso
        , valorInicial);


    // Guardamos resultados por categoria en un array
    return [sumPesoCategoriaA, sumPesoCategoriaB, sumPesoCategoriaC];
}

const sumatoriaPesosPorCategoria = calcularPesoTotalPorCategoria(infoConcurso);

console.log(`El peso total de la categoria A es: ${sumatoriaPesosPorCategoria[0]}`);
console.log(`El peso total de la categoria B es: ${sumatoriaPesosPorCategoria[1]}`);
console.log(`El peso total de la categoria C es: ${sumatoriaPesosPorCategoria[2]}`);


function obtenerGanador(infoConcurso) {
    let valoresTruchas = [];
    let longitudActual = 0;
    let pesoActual = 0;
    let infoConcursante = null;
    for (let i = 0; i < infoConcurso.length; i++) {
        infoConcursante = infoConcurso[i];
        longitudActual = infoConcursante.trucha.longitud;
        pesoActual = infoConcursante.trucha.peso;
        valoresTruchas.push({
            nombreParticipante: infoConcursante.participante.nombre,
            valorTotal : pesoActual + longitudActual
        });
    }

    const valoresOrdenados = valoresTruchas.sort((a , b) => a.valorTotal - b.valorTotal);
    const valorMaximo = valoresOrdenados[valoresOrdenados.length -1];
    
    console.log(`El ganador del concurso fue: ${valorMaximo.nombreParticipante}`);
}

function compareNumbers(a, b) {
    return a - b;
}


obtenerGanador(infoConcurso);