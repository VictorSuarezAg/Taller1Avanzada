let planetas = [
    {
        nombrePlaneta: 'Alderaan',
        latitud: '55.000266',
        longitud: '30.458736',
        oxigeno: 21,
        agua: 1400
    },
    {
        nombrePlaneta: 'Death Star',
        latitud: '75.000266',
        longitud: '42.458736',
        oxigeno: 25,
        agua: 0
    },
    {
        nombrePlaneta: 'Yavin 4',
        latitud: '86.000266',
        longitud: '-40.458736',
        oxigeno: 19,
        agua: 800
    },
    {
        nombrePlaneta: 'Hoth',
        latitud: '89.000266',
        longitud: '42.458736',
        oxigeno: 35,
        agua: 6400
    },
    {
        nombrePlaneta: 'Dagobah',
        latitud: '75.000266',
        longitud: '33.458736',
        oxigeno: 32,
        agua: 1200
    },
    {
        nombrePlaneta: 'Cloud city of Bespin',
        latitud: '13.000266',
        longitud: '-50.458736',
        oxigeno: 70,
        agua: 300
    },
    {
        nombrePlaneta: 'Forest Moon of Endor',
        latitud: '25.000266',
        longitud: '-40.458736',
        oxigeno: 31,
        agua: 1500
    },
    {
        nombrePlaneta: 'Jakku',
        latitud: '-55.000266',
        longitud: '37.458736',
        oxigeno: -2,
        agua: 100
    },
    {
        nombrePlaneta: 'Starkiller Base',
        latitud: '-55.000266',
        longitud: '-30.458736',
        oxigeno: 23,
        agua: 0
    }
]

let agua = (planetas) => {
    let sumarAgua = 0;
    planetas.forEach(planeta => {
        sumarAgua = sumarAgua + planeta.agua

        if (planeta.agua == 0) {
            setTimeout(() => {
                console.log(planeta)
            }, 1050)
        }
    })
    console.log(`El total del agua en los planetas es ${sumarAgua} millones de kilometros cubicos`)
}

let oxigeno = (planetas) => {
    let sumarOxigeno = 0;
    planetas.forEach(planeta => {
        sumarOxigeno = sumarOxigeno + planeta.oxigeno 
        
        if (planeta.oxigeno < 0){
            setTimeout(() => {
                console.log(planeta);
            }, 550)
        }
    })
    let multiplicarOxigeno = sumarOxigeno * 100
    console.log(`El total del oxigeno en todos los planetas es ${sumarOxigeno} y al mutiplicarlo por 100 el total es ${multiplicarOxigeno}`)
    setTimeout(() => {
        console.log('El(los) planetas con oxigeno negativo son(es):')
    }, 500)
    setTimeout(() => {
        console.log('El(los) planetas sin agua son(es):')
    }, 1000)
}

agua(planetas)
oxigeno(planetas)