let alimentos = []

function generate () {
	let nombreAlimento = ["chocolate", "cucaracha", "mariposa", "conejo", "frijoles", "lentejas", "pollo", "pescado", "solomo", "grillo", "platano", "yuca", "borojo", "hormiga"]
	let tipoAlimento = ["Insecto", "Vegetal", "Animal"]
	for (let i = 0; i < 10; i++) {
		let rand_nombre = Math.floor(Math.random()*nombreAlimento.length)
		let rand_tipo = Math.floor(Math.random()*tipoAlimento.length);
		let nivelAlimenticio = Math.floor((Math.random() * (500 - 100 + 1)) + 100)
		alimentos.push({
			nombre: nombreAlimento[rand_nombre],
			tipo: tipoAlimento[rand_tipo],
			nivel: nivelAlimenticio
		})
	}
}

function obtenerVegetales (nivel) {
	setTimeout(function () {
		let vegetales = alimentos.filter(function (alimento) {
			if (alimento.tipo == 'Vegetal') {
				if (alimento.nivel > 200) {
					return alimento
				}
			}
		})
		console.log(`Los alimentos de tipo vegetal con niveles de energia superirores a 200 son: `)
		console.log(vegetales)
		nivel(vegetales)
	}, 5000)
}

obtenerVegetales(function (alimentosVegetales) {
	let sumaNiveles = 0
	alimentosVegetales.forEach(function (alimento) {
		sumaNiveles = sumaNiveles + alimento.nivel
	})
	console.log(`La sumatoria de  de niveles de energía es ${sumaNiveles}`)
})

generate()

console.log(alimentos)
