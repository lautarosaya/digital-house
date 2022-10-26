//* La computadora repite por nosotros

/* const imprimirAzul4 = () => {
    for (let i = 0; i < 4; i++) {
        console.log('Azul');        
    }
}

console.log(imprimirAzul4()); */

//* Hagamos una más

/* const pasandoPorI = () => {
    for (let i = 0; i <= 4; i++) {
        console.log(`acá i tiene el valor de ${i}`);
    }
}
console.log(pasandoPorI()); */

//* Contar impares

const noParesDeContarImparesHasta = numero => {
    let rta = 0;
    for (let i = 0; i <= numero; i++) {
        if (i % 2 !== 0) {
            rta +=1;
        }
    }
    return rta;
}
console.log(noParesDeContarImparesHasta(5)); 