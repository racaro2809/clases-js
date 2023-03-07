
//Objetos
// Key -> Llave 
// Value -> Valor 
let persona = {
    nombre: "Marcos",
    edad: 27,
    peso: "88Kg",
    hobbieFavorito: "Video Juegos",
    datosPareja: {
        nombre: "Carolina",
        edad: "28",
        datosMascota: {
            tipo: "Perro",
            nombre: "kongo",
            raza: "Bully"
        }
    }
}

console.log(`Hola me llamo ${persona.nombre}, tengo ${persona.edad} años y mi hobbie favorito es jugar ${persona.hobbieFavorito}, y peso ${persona.peso}`);

console.log(persona.datosPareja.nombre);


var alumnos = [{
    nombre: "María",
    apellido: "García",
    edad: "18",
}, {
    nombre: "Edgar",
    apellido: "Gómez",
    edad: "19"
}, {
    nombre: "Greta",
    apellido: "López",
    edad: "18"
}]

console.log(alumnos[1].nombre);