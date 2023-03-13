//Se declara el arreglo

let sables = [8,-9,5,-8,2,3,-35,6,7-1]

//Se declara variable para identificar la cantidad de sables negativos
let cantidaSablesNegativos = 0

//Se crea función para contar los sables negativos
let contarSablesNegativos =  sables.forEach(function(contar){
if (contar<0) {
    cantidaSablesNegativos = cantidaSablesNegativos + 1
}
}); 

//Se imprime mensaje con los sables negativos
console.log("Los sables con energía negativa son: "+cantidaSablesNegativos);