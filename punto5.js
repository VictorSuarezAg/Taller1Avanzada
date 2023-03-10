let salario = 3500000,
    comision = 1500000,
    deduccion = 0.05

let salarioFinal = (licencias) => {
    let salarioBruto = (comision * licencias) + salario,
        deduccionTotal = salarioBruto * deduccion,
        salarioNeto = salarioBruto - deduccionTotal
        console.log(`El salario final de este trabajador es de ${salarioNeto}`);
}

salarioFinal(3)