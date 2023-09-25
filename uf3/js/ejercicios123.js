/*
Desarrolla una función que puntúe una mano de cartas, que tenga como
parámetro un array de cartas, cada una representada por un objeto con palo
y valor. Al puntuar, las cartas suman su valor excepto si es un as que suma
20. Prueba a invocarla con varias manos de cartas con y sin ases.

2. Partiendo de la función anterior, modifícala para que además las cartas rojas
sumen el doble. (Lo adapto a que oros y copas sumen doble.)

3. 

*/

// Creo una función para inicializar la baraja

function iniciarBaraja () {

    baraja = new Array();

    baraja [0] = {
        nombre : 'publi',
        palo : 'fournier',
        valor : 0
    }

    // 'Oros'

    baraja [1] = {
        nombre : 'as',
        palo: 'oros',
        valor: 20
    }

    for (let i = 2 ; i < 8; i++) {

        baraja[i] = {
            nombre: i,
            palo : 'oros',
            valor: i
        }
    }

    baraja [8] = {
        nombre: 'sota',
        palo: 'oros',
        valor: 10
    }

    baraja [9] = {
        nombre:'caballo',
        palo: 'oros',
        valor: 11
    }

    baraja [10] = {
        nombre: 'rey',
        palo: 'oros',
        valor: 12
    }

    // 'Copas'

    baraja [11] = {
        nombre : 'as',
        palo: 'copas',
        valor: 10
    }

    for (let i = 12 ; i < 18; i++) {

        baraja[i] = {
            nombre: i-10,
            palo : 'copas',
            valor: i-10
        }
    }

    baraja [18] = {
        nombre:'sota',
        palo: 'copas',
        valor: 10
    }

    baraja [19] = {
        nombre:'caballo',
        palo: 'copas',
        valor: 11
    }

    baraja [20] = {
        nombre: 'rey',
        palo: 'copas',
        valor: 12
    }

    // 'Espadas'

    baraja [21] = {
        nombre : 'as',
        palo: 'espadas',
        valor: 10
    }

    for (let i = 22 ; i < 28; i++) {

        baraja[i] = {
            nombre: i-20,
            palo : 'espadas',
            valor: i-20
        }
    }

    baraja [28] = {
        nombre:'sota',
        palo: 'espadas',
        valor: 10
    }

    baraja [29] = {
        nombre:'caballo',
        palo: 'espadas',
        valor: 11
    }

    baraja [30] = {
        nombre: 'rey',
        palo: 'espadas',
        valor: 12
    }

    // Bastos

    baraja [31] = {
        nombre : 'as',
        palo: 'bastos',
        valor: 10
    }

    for (let i = 32 ; i < 38; i++) {

        baraja[i] = {
            nombre: i-30,
            palo : 'bastos',
            valor: i-30
        }
    }

    baraja [38] = {
        nombre:'sota',
        palo: 'bastos',
        valor: 10
    }

    baraja [39] = {
        nombre:'caballo',
        palo: 'bastos',
        valor: 11
    }

    baraja [40] = {
        nombre: 'rey',
        palo: 'bastos',
        valor: 12
    }

}

// Inicializo la baraja

iniciarBaraja();

// Funcion para puntuar las manos

function puntuar (mano) {

    let puntuacion = 0;

    for (let i = 0; i < mano.length ; i++ ) {

        puntuacion += mano[i].valor; 

    }

    return puntuacion;

}

// Funcion para puntuar las manos con copas y oros dobles

function puntuarDobles (mano) {

    let puntuacion = 0;

    for (let i = 0; i < mano.length ; i++ ) {

        if (mano[i].palo=='copas'||mano[i].palo=='oros') {
            puntuacion += (mano[i].valor*2); 
        }
        else
            puntuacion += mano[i].valor; 

    }

    return puntuacion;

}


// Manos de Ejemplo Random (se pueden repetir cartas :)

mano1 = [
    baraja[Math.floor(Math.random() * (40)+1)],
    baraja[Math.floor(Math.random() * (40)+1)],
    baraja[Math.floor(Math.random() * (40)+1)]
];

mano2 = [
    baraja[Math.floor(Math.random() * (40)+1)],
    baraja[Math.floor(Math.random() * (40)+1)],
    baraja[Math.floor(Math.random() * (40)+1)]
];

mano3 = [
    baraja[Math.floor(Math.random() * (40)+1)],
    baraja[Math.floor(Math.random() * (40)+1)],
    baraja[Math.floor(Math.random() * (40)+1)]
];

manoConAses = [
    baraja[1],
    baraja[Math.floor(Math.random() * (40)+1)],
    baraja[Math.floor(Math.random() * (40)+1)]
];

manoSinAses = [
    baraja [2],
    baraja [3],
    baraja [4]
]










