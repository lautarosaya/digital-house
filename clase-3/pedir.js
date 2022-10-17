const readline = require('readline');


let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question('Cual es tu nombre? : ', function (respuestaNombre) {
    interfazCaptura.question('Cual es tu apellido? : ', function (respuestaApellido) {
        interfazCaptura.question('Cual es su sueldo? : $', function (respuestaSueldo) {
            interfazCaptura.question('Cual es el porcentaje de aumento? : %', function(respuestaPorcentaje){
                calculoAumento = respuestaSueldo * (respuestaPorcentaje / 100);
                nuevoSueldo = Number(respuestaSueldo) + Number(calculoAumento);
            
            
                console.log(`El sueldo actual es de: $${respuestaSueldo}`);
                console.log(`El aumento que recibio es de: %${respuestaPorcentaje}`);
                console.log(`El aumento es de: $${calculoAumento}`);
                console.log(`El nuevo sueldo es de: $${nuevoSueldo}`);
            
            interfazCaptura.close();
            })
        })
    })
})



