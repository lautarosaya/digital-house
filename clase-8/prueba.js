//*Invertir texto
/* const invertirTexto = texto => {
    for (let i = 0; i < texto.length; i++) {
        palabra = texto.split('');
        sacarLetra = palabra.pop();
        palabra.unshift(sacarLetra);
        return palabra;
    }
}
console.log(invertirTexto('Hola')); */

/* const reporteDePasajeros = (estacionFinal) => {
    let informes = [];
    let pasajerosInicial = 200;
    for (let estacionInicial = 0; estacionInicial <= estacionFinal; estacionInicial++) {
        switch (estacionInicial) {
            case 0:
                break;
            case 5:
                pasajerosInicial += 40;
                break;
            default:
                pasajerosInicial += 20;
                
        }
        informes.push(`En la estación ${estacionInicial} hay ${pasajerosInicial} pasajeros arriba del tren`)
    }
    return informes;    
}
console.log(reporteDePasajeros(20)); */