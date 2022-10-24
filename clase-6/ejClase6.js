//* Ejercicio 1

const electrodomesticos = ['Microondas', 'Heladera', 'Cocina', 'Horno', 'Licuadora', 'Tostadora']

//*Aleatorio
/* const aleatorio = electrodomesticos[Math.floor(Math.random() * electrodomesticos.length)];
console.log(aleatorio); */

//*Sacar de inicio y poner al final
/* const borrarAddFinal = electrodomesticos.shift();
const addFinal = electrodomesticos.push(borrarAddFinal);
console.log(electrodomesticos); */

//*Agregar dos elementos mas al array
/* const addOne = electrodomesticos.push('Batidora');
const addTwo = electrodomesticos.push('Lavavajillas');
console.log(electrodomesticos); */

//*Mostrar cantidad de elementos
/* const cantidad = electrodomesticos.length;
console.log(cantidad, electrodomesticos); */

//*Buscar elemento en array y indicar si existe o no 
/* const buscar = (array, elemento) => {
    if (array.includes(elemento) == true) {
        return 'Producto encontrado';
    } else{
        return 'El producto buscado no existe';
    }
}
console.log(buscar(electrodomesticos, 'Frezeer')); */

//* Juntar elementos de array con espaciado
/* const juntarArray = electrodomesticos.join(' ');
console.log(juntarArray); */


//* Determinar la cantidad de elementos que tiene el string obtenido
/* const elementosTexto = juntarArray.length
console.log(elementosTexto); */

//* Cambiar alguna palabra del string
/* const cambiarPalabra = juntarArray.replace('Heladera', 'Menem');
console.log(cambiarPalabra); */

//* Convertir texto a array
/* const convertirTexto = juntarArray.split(" ");
console.log(convertirTexto); */

//* Ejercicio 2

/* let peliculas = ['Turno de dia', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis', 'Thor'];

const ponerPrimero = pelicula => {
    eliminarUno = peliculas.pop();
    agregarPrimero = peliculas.unshift(eliminarUno);
    pelicula.toUpperCase();
    return peliculas;
}
console.log(ponerPrimero('Thor'));

const pelisEstrenar = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'];
separados = pelisEstrenar.join();
eliminarDos = pelisEstrenar.shift();

const juntar = (arrayUno, arrayDos) => juntaderoDePelis = arrayUno.concat(arrayDos);

console.log(juntar(peliculas, pelisEstrenar)); */


