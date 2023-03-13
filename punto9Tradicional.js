
//Se crea función para capturar los atributos del eleento
function crearEstudiante(nombre, planeta, edad, estatura,clasificarEstudiante){
    setTimeout(function(){
        let estudiante ={
            nombre: nombre,
            edad: edad,
            planeta: planeta,
            estatura: estatura
        }
        clasificarEstudiante(estudiante.edad)
    },1000)
}

//Se invoca la función de crear estudiante y se declara la función de clasificarlo
crearEstudiante("Juan", "Marte",18,1.86,function(edad){
    if (edad<15) {
        console.log("Su edad es: "+edad+" tu clase sera manejo de la fuerza")
    }else{
        console.log(" su edad es: "+edad+" tu clase sera uso del sable")
    }
})