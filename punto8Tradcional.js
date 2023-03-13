//Se declara el arreglo de objetos que contiene la info de los 15 planetas

let planetas = [
    {nombrePlaneta:'Alderaan',latitud:'23°S',longitud:'16°E',nivelOxigeno:19,VolumenTotalAguaM3:14000523},
    {nombrePlaneta:'Death Star',latitud:'44°N',longitud:'32°w',nivelOxigeno:23,VolumenTotalAguaM3:99000000},
    {nombrePlaneta:'Yavin 4',latitud:'29°S',longitud:'48°E',nivelOxigeno:9,VolumenTotalAguaM3:18236548},
    {nombrePlaneta:'Hoth',latitud:'53°N',longitud:'70°w',nivelOxigeno:85,VolumenTotalAguaM3:45600000},
    {nombrePlaneta:'Dagobah',latitud:'51°S',longitud:'14°E',nivelOxigeno:-35,VolumenTotalAguaM3:0},
    {nombrePlaneta:'Cloud city of Bespin',latitud:'29°N',longitud:'14°w',nivelOxigeno:12,VolumenTotalAguaM3:29569874},
    {nombrePlaneta:'Forest Moon of Endor',latitud:'28°N',longitud:'16°E',nivelOxigeno:63,VolumenTotalAguaM3:0},
    {nombrePlaneta:'Jakku',latitud:'5°N',longitud:'24°E',nivelOxigeno:32,VolumenTotalAguaM3:14236541},
    {nombrePlaneta:'Starkiller Base',latitud:'14°N',longitud:'15°w',nivelOxigeno:-56,VolumenTotalAguaM3:0},
    {nombrePlaneta:'Marte',latitud:'13°S',longitud:'11°E',nivelOxigeno:22,VolumenTotalAguaM3:25896324},
    {nombrePlaneta:'Jupiter',latitud:'18°S',longitud:'17°w',nivelOxigeno:49,VolumenTotalAguaM3:17456987},
    {nombrePlaneta:'Pluton',latitud:'29°N',longitud:'36°E',nivelOxigeno:61,VolumenTotalAguaM3:2589741},
    {nombrePlaneta:'Urano',latitud:'55°S',longitud:'52°w',nivelOxigeno:89,VolumenTotalAguaM3:18000000},
    {nombrePlaneta:'Saturno',latitud:'12°N',longitud:'29°E',nivelOxigeno:15,VolumenTotalAguaM3:29000000},
    {nombrePlaneta:'Venus',latitud:'9°S',longitud:'15°w',nivelOxigeno:68,VolumenTotalAguaM3:87456321}
]

//Se declara variable para sumar el agua de todos los planetas
let sumaAgua = 0 

//Se suma la cantidad de agua de agua de todos los planetas
planetas.forEach(function(agua){
    sumaAgua = sumaAgua + agua.VolumenTotalAguaM3
})

//Se imprimela suma de agua
console.log("La suma total de agua en los planetas es: "+sumaAgua);


//Se declara variables para realizar las operaciones del oxigeno
let sumaOxigeno = 0
let operacionOxigeno = 0

//se crea función para la suma del oxigeno de todos los planetas
planetas.forEach(function(oxigeno){
    sumaOxigeno = sumaOxigeno + oxigeno.nivelOxigeno
})

//Se multiplica la suma del pxigeno * 100
operacionOxigeno = sumaOxigeno * 100 

//Se imprime el resultado de la operación del oxigeno
console.log("El resultado de la operación referente al oxigeno es: "+operacionOxigeno);

//Función para identificar los planetas con oxigeno negativo
let oxigenoNegativo = planetas.filter(function(OxiNeg){
    return(OxiNeg.nivelOxigeno<0)
})

//Se imprimen los planetas con oxigeno negativo
console.log(`Los planetas con oxigeno negativo son: `);
console.log(oxigenoNegativo);

//Función para identificar los planetas que 
let planetaSinAgua = planetas.filter(function(plaSinAg){
    return(plaSinAg.VolumenTotalAguaM3==0)
})

//Se imprimen los planetas sin agua
console.log(`Los planetas que no poseen agua son: `);
console.log(planetaSinAgua);
