/* FUNCTION CUADRUPLE DE UN NUM */
/* function cuadruple(num) {
    return 4 * num;
}

console.log(cuadruple(5)); */

/* FUNCTION MULTIPLICAR DOS NUM */

/* function multiplicar(numUno, numDos) {
    return numUno * numDos;
}

console.log(multiplicar(2,2)); */

/* FUNCTION TRIPLE DE LA SUMA */

/* function suma(num1, num2) {
    return num1 + num2;
}

function triple(numero) {
    return numero * 3;
}

function tripleDeLaSuma(num3, num4){
    let valorSuma = suma(num3, num4);
    let valorTriple = triple(valorSuma)
    return valorTriple;
}
console.log(tripleDeLaSuma(2,2)); */

/* FUNCTION PERIMETRO Y AREA */
/* const pi = 3.14;

function perimetro(radio){
    return 2 * pi * radio;
}

console.log(perimetro(7));

function area(radio) {
        return pi * radio ^ 2;
}

console.log(area(2)); */

/* FUNCTION LONGITUD NAME COMPLETO */

/* function longitudNombreCompleto(nombre, apellido) {
    let longitud = nombre + " " + apellido;
    return longitud.length;
}

console.log(longitudNombreCompleto('Lautaro', 'Sayavedra')); */

/* FUNCTION CONATENAR */

/* function escribirCartelito(titulo, nombre, apellido) {
    let frase = titulo + " " + nombre + " " + apellido;
    return frase;
}

console.log('Ing.', 'Lautaro', 'Sayavedra'); */

/* FUNCTION OLLA */

/* function sePoneLaOlla(dia) {
    if (dia == 'Domingo') {
        return '¡Pongamos la olla, hoy se comen pastas!';
    }
    else{
        return 'Mejor lo dejamos para el domingo';
    }
} 

console.log(sePoneLaOlla('Domingo')); */

/* EJ 1 FINDE */

/* let dia = 'jueves'
function finDeSemana (dia) {	
    switch (dia) {
        case 'viernes':
            return 'buen finde';
            break;
        case 'lunes':
            return 'buena semana';
            break;
    
        default:
            return 'buen dia';
    }
}

console.log(finDeSemana('viernes')); */

/* EJ2 TENGO CLASES */

/* function tengoClases(dia) {
	switch (dia) {
    	case 'lunes':
			console.log('tenés clases');
			break;
		case 'miércoles':
			console.log('tenés clases');
			break;
		case 'viernes':
			console.log('tenés clases');
			break;
		default:
			console.log('no tenés clases')
	}
}

console.log(tengoClases('miercoles')); */