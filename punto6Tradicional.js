//Se declara el arreglo con el código en cero para posteriormente generarlo de forma aleatoria y se declara la edad
let clones = [
    {codigo:0, Edad:12},
    {codigo:0, Edad:23},
    {codigo:0, Edad:6},
    {codigo:0, Edad:53},
    {codigo:0, Edad:33},
    {codigo:0, Edad:28},
    {codigo:0, Edad:19},
    {codigo:0, Edad:32},
    {codigo:0, Edad:14},
    {codigo:0, Edad:23},
    {codigo:0, Edad:48},
    {codigo:0, Edad:40},
    {codigo:0, Edad:39},
    {codigo:0, Edad:18},
    {codigo:0, Edad:14},
    {codigo:0, Edad:63},
    {codigo:0, Edad:78},
    {codigo:0, Edad:22},
    {codigo:0, Edad:19},
    {codigo:0, Edad:78}
]

//Se genera de forma aleatoría el código
for (let index = 0; index <20; index++) {
    clones[index].codigo = Math.floor(Math.random()*10);    
}

//Se declara la variable para identificar cual es el número mayor
let edadMayor = 0

//Se identifica el # mayor
clones.forEach(function(edad){
    if(edad.Edad >edadMayor){
        edadMayor = edad.Edad
    }
})

//Se filtra el número mayor
let filtroMayor = clones.filter(function(mayor){
    return(mayor.Edad==edadMayor)
})

//Se determina el # de repeticiones de la edad mayor
let cantidadEdadMayor = filtroMayor.length
//Se imprime el vector
console.log(clones);
//Se imprime el ó los códigos con la edad mayor
console.log(filtroMayor);
//Se imprime la cantidad de repeticiones de edad mayor
if (cantidadEdadMayor==1) {
    console.log("La edad mayor se repite "+cantidadEdadMayor+" vez");
}
else{
    console.log("La edad mayor se repite "+cantidadEdadMayor+" veces");
}


