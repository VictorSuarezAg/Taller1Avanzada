function crearEstudiante (nombre, planeta, edad, estatura, clasificarEstudiante) {
    setTimeout(() => {
        let estudiante = {
            nombre,
            edad,
            planeta,
            estatura
        }
        clasificarEstudiante(estudiante.edad)
    }, 1000);
}

crearEstudiante('Pedro', 'Marte', 13, 1.86, function (edad) {
    if (edad < 15) {
        console.log(`Su edad es ${edad} tu clase sera manejo de la fuerza`);
    } else {
        console.log(`Su edad es ${edad} tu clase sera uso del sable`);
    }
})