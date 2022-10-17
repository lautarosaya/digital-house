/* DESAFIO 1 */
const perfil = 'invitado';

/* switch (perfil) {
    case 'administrador':
        console.log('Usted tiene todos los privilegios de uso del sistema.');
        break;

    case 'asistente':
        console.log('Usted solo tiene permisos de registrar, modificar y consultar datos.');
        break;

    case 'invitado':
        console.log('Usted solo tiene permisos de consultar datos');
        break;

    default:
        console.log('Debe espesificar un perfil valido.');
} */

/* DESAFIO 2 */

/* const pagoMes = 2000;
const consumoKWH = 502;


let nuevoPago = consumoKWH > 300 ? pagoMes * 20 / 100 + pagoMes: console.log('Su Pago va a ser el mismo');

nuevoPago > pagoMes ? console.log(`Debido a que su hogar ruvo un consumo de ${consumoKWH}KWH, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendran un aumento del 20%),cumplimos con informarle que se ha ajustado el total a pagar, que sera de $${nuevoPago}`): ''; */

/* DESAFIO 3 */

const numUno = 1;
const numDos = 2;
const operacion = 'resta';
let resultado;

switch (operacion) {
    case 'suma':
        resultado = numUno + numDos;
        console.log(`El resultado de la ${operacion} ${numUno} y ${numDos} es: ${resultado}`);
        break;
    case 'resta':
        resultado = numUno - numDos;
        console.log(`El resultado de la ${operacion} ${numUno} y ${numDos} es: ${resultado}`);
        break;
    case 'multiplicacion':
        resultado = numUno * numDos;
        console.log(`El resultado de la ${operacion} ${numUno} y ${numDos} es: ${resultado}`);
        break;
    case 'division':
        resultado = numUno / numDos;
        console.log(`El resultado de  la${operacion} ${numUno} y ${numDos} es: ${resultado}`);
        break;
    default:
        console.log('No es una operacion valida.');
}


