let edades = Array.from({length: 20}, () => Math.floor(Math.random() * (50 - 20) + 20))
let repetidos = {}
let mayorEdad = 0
    
edades.forEach(function(edad){
    if (edad > mayorEdad) {
        mayorEdad = edad
    }

    repetidos[edad] = (repetidos[edad] || 0) + 1
})

console.log(`El Storm Trooper con mas edad tiene ${mayorEdad}` )
console.log('Estas son las edades y las veces que se repiten')
console.log(repetidos);