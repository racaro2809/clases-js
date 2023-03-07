
// WOW

// Razas -  Tipos - Clanes - Elementos - Poderes

let infoWarOfWarcraft = {
    "facciones": {
        "horda": {
            "razas": ["Orco", "Taurent", "No Muerto", "Elfo DE Sangre", "Goblin", "Troll"]
        },
        alianza: {
            razas: ["Humano", "Elfos De La Noche", "Draenei", "Enano", "Wargen", "Gnomo"]
        },
    },
    clases: ["Guerrero", "Cazador", "picaro", "chaman", "Druida", "DK", "Sacerdote", "Mago", "Brujo", "Monje"]
}

function elegirPersonaje(raza, clase) {
    console.log(`tu personaje elejido fue un ${raza} ${clase}`);
}

let raza = infoWarOfWarcraft.facciones.horda.razas[5];
let clase = infoWarOfWarcraft.clases[1];

delete infoWarOfWarcraft.clases;
console.dir(infoWarOfWarcraft);


elegirPersonaje(raza, clase);
