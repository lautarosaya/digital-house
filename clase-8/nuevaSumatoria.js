//* Nueva sumatoria
//hacer una funcion que como parametro reciba un array
//esta tiene que sumar todos los importes de los meses que tengan ganancias, pero no tiene que mostar los que pasen de 1000
//hay que recorrer el array con un for
//hay que preguntar si el valor de la posicion en el array no es mayor a 1000
//si se cumple la condicion hay que guardar ese valor en una variable y sumarla a la que sigue
/* const sumatoriaBajoImporte = importeMes => {
    let valor = 0;
    for (let i = 0; i < importeMes.length; i++) {
        element = importeMes[i];
        if (element > 0) {
            if (element <= 1000) {
                valor = valor + element;
            }
        }
        
    }
    return valor;
}
console.log(sumatoriaBajoImporte([100, 50, 2000, 5000, 1000 , 500])); */

//*Entradas para cine
//una funcion de asientos disponibles
//como parametro hay que pasar un array que va a contener los asientos y como segundo parametro hay que pasar el asiento que queres saber si esta ocupado
//hacer magia para poner de forma al azar que asientos estan ocupados y cuales no
/* const asientosDisponibles = (conjuntoAsientos, asientoElegido) => {
    const asientos =  conjuntoAsientos[Math.floor(Math.random() * conjuntoAsientos.length)];
    const asientosRestantes = conjuntoAsientos.length - 1;
    if (asientos == asientoElegido) {
        return `Felicitaciones, el asiento número ${asientoElegido} está disponible`;
    }else{
        return `Lo sentimos, el asiento número ${asientoElegido} está ocupado, pero aún quedan ${asientosRestantes} asientos disponibles`
    }
}
console.log(asientosDisponibles([15,20,18,22,49],49)); */

/* const asientosDisponibles = (array, asientoSolicitado) => {
    const asientosRestantes = array.length;
    for (let i = 0; i < array.length; i++) {
        const valor = array[i];
        if (asientoSolicitado == valor) {
            return `Felicitaciones, el asiento número ${asientoSolicitado} está disponible`;
        }
    }
    return `Lo sentimos, el asiento número ${asientoSolicitado} está ocupado, pero aún quedan ${asientosRestantes} asientos disponibles`;
}
console.log(asientosDisponibles([1,2,4,5], 6));  */

//*Control de pasajeros
//funcion como parametro nroEstacion
//ciclo estacion hasta 5
//calculamos los pasajeros
//lo devolvemos


function reporteDePasajeros(nroEstacion){
    let pasajerosTren = [];
    let pasajeros = 200;
    for (let i = 0; i <= nroEstacion; i++) {
     pasajerosTren.push('En la estación ' + i + ' hay ' + pasajeros + ' pasajeros arriba del tren');
     if (i == 4) {
         pasajeros = pasajeros + 120 - 80;
     } else {
         pasajeros = pasajeros + 50 - 30;
     }
    }
    return pasajerosTren;
 }
 
console.log(reporteDePasajeros(0)); 


//*Clave secreta
/* const claveSecreta = (texto) => {
    let xd = '';
    for (let i = 0; i < texto.length; i++) {
        caracter = texto[i];
        if (caracter != '*') {
            xd = caracter + xd;
        }
    }
    return xd;
}
console.log(claveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] )); */