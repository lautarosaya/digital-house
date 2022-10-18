/* let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} elseif (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
} */

let dia = 'jueves'

switch (dia) {
    case 'viernes':
        console.log('buen finde');
        break;
    case 'lunes':
        console.log('buena semana');
        break;
    default:
        console.log('buen dia');
        break;
}