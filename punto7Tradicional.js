let numeros = [7,-10,13,8,4,-7,-12,-3,3,-9,6,-1,-6,7]

function cercaCero(numeros) {
    if(!numeros.length){
        return 0
    }
    
    let cercano = 0
    
    for (let i = 0; i < numeros.length ; i++) {
        if (cercano == 0) {
            cercano = numeros[i];
        } else if (numeros[i] > 0 && numeros[i] <= Math.abs(cercano)) {
            cercano = Math.abs(numeros[i]);
        } else if (numeros[i] < 0 && - numeros[i] < Math.abs(cercano)) {
            cercano = Math.abs(numeros[i]);
        }
    }
    
    return cercano;
}

console.log(numeros);

console.log(`Resultado: ${cercaCero(numeros)}`);