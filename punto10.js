let alimentos = []

function generate(){
	let nombreAlimento = ["chocolate", "cucaracha", "mariposa", "conejo", "frijoles", "lentejas", "pollo", "pescado", "solomo", "grillo", "platano", "yuca", "borojo", "hormiga"]
	let tipoAlimento = ["Insecto", "Vegetal", "Animal"]
	let rand_nombre = Math.floor(Math.random()*nombreAlimento.length)
	let rand_tipo = Math.floor(Math.random()*tipoAlimento.length);
	let nivelAlimenticio = Math.floor((Math.random() * (500 - 100 + 1)) + 100)
	// console.log("nombre: " + nombreAlimento[rand_nombre])
	// console.log(`tipo: ${tipo[rand_tipo]}`)
	// console.log(`tipo: ${nivelAlimenticio}`)

	let alimento = {}
	for (let i = 0; i < 5; i++) {
		alimento[i] = {
			nombre: nombreAlimento[rand_nombre],
			tipo: tipoAlimento[rand_tipo],
			nivel: nivelAlimenticio
		}
		alimentos.push(alimento[i])
	}
}

generate()


console.log(alimentos);