let energiaSables = [2, 4, -8, 5, -6]

let analisisSables = (energiaSables) => {
    let sablesNegativos = 0,
        sablesPositivos = 0
    energiaSables.forEach(sables => {
        if (sables < 0) {
            sablesNegativos = sablesNegativos + 1
        } else {
            sablesPositivos = sablesPositivos + 1
        }
    });
    console.log(`La cantidad de sables negativos es ${sablesNegativos} y la cantidad de sables con energia positiva es ${sablesPositivos}`);
}

analisisSables(energiaSables)