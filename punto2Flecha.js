let naves = [
    {
        codigo: 'ARQ2555: Sara Bel-Sun',
        clave: 'red2'
    },
    {
        codigo: 'ARQ2556: Nodin Chavdri',
        clave: 'v4xd'
    },
    {
        codigo: 'ARQ2557: Finn FN-2187',
        clave: 'ocho-siete'
    }
]

let codigos = (naves, clave) => {
    naves.forEach((nave) => {
       if (nave.clave == clave) {
            let nombre = nave.codigo.split(' ')
            console.log(`El nombre del piloto es ${nombre[1]} de la nave ${nombre[0]} con la clave ${clave}`);
       }
    })
}

codigos(naves, 'ocho-siete')