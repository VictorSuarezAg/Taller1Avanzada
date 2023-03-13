//Se declara el arreglo con 10 objetos
let naves = [
    {codigoNave:'N9009', numero:-45},
    {codigoNave:'N5421', numero:-156},
    {codigoNave:'N7825', numero:14},
    {codigoNave:'N8975', numero:325},
    {codigoNave:'N2967', numero:-456},
    {codigoNave:'N9317', numero:13},
    {codigoNave:'N2459', numero:2},
    {codigoNave:'N1897', numero:1236},
    {codigoNave:'N1234', numero:-2},
    {codigoNave:'N1258', numero:13}
]

//Función para convertir los números a valores absolutos
naves.map(function(Abs){
    Abs.numero = Math.abs(Abs.numero)
})

//Se declara variable para determinar cual es el número más cercano a cero
let cercanoACero= 100000000000

//Se crea función para determinar cual es el número más cercano a cero
naves.forEach(function(numeroMenor){
    if (numeroMenor.numero<cercanoACero) {
        cercanoACero = numeroMenor.numero
    }
})

//Se crea función para filtrar las naves cuyo # es ó son más cercanos a cero
let navesConNumerosCercanosACero = naves.filter(function(filtro){
    return(filtro.numero==cercanoACero)
})

//Se imprime las naves cuyo número esta más cercano a cero
if (navesConNumerosCercanosACero.length==1) {
    console.log("La nave cuyo número es más cercano a cero es:");
}else{
    console.log("Las naves cuyos números más cercanos a cero son:");
}
console.log(navesConNumerosCercanosACero);

