/* const operaciones=[50,-48,58,78,-69,-45];

function cuenta(operaciones){
    let positivos = 0;
    let negativos = 0;
    let total = 0;

    for (let i =0; i < operaciones.length; i++){
        if (operaciones[i]>= 0){
            positivos=positivos + operaciones[i];
        }else{
            negativos = negativos + operaciones[i];
        }
    }
    return [positivos, negativos, positivos + negativos];

}
console.log(cuenta(operaciones));
let x=cuenta(operaciones);


function usuario(nombre, apellido, operaciones){
    return ' Estimada ' + nombre + ' ' + apellido + 
    '\nEl monto total de los depÃ³sitos es de: ' + x[0]+  
'\nEl monto total de los retiros es de: ' + x[1] + 
'\nPor lo tanto, su saldo actual en la cuenta es de: $ ' + x[2];
}

console.log(usuario('Pepito', 'Mancini', cuenta(operaciones))); */