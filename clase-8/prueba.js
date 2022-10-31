//*Invertir texto
const invertirTexto = texto => {
    for (let i = 0; i < texto.length; i++) {
        palabra = texto.split('');
        sacarLetra = palabra.pop();
        palabra.unshift(sacarLetra);
        return palabra;
    }
}
console.log(invertirTexto('Hola'));