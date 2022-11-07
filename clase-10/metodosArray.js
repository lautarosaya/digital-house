//* map(), modifica un array y te devuelve uno nuevo
/* const cambiar = [10,2,4,42];
let duplicar = cambiar.map(function(numero){
    return numero * 2;
});
console.log(duplicar); */
//* filter(), busca dentro de el array todos los resultados que coincidan con la condicion
/* const edades = [10,18,20,5];
let mayores = edades.filter(function (unaEdad) {
    return unaEdad>=18;
});
console.log(mayores); */
//* reduce(), recorre el array y acumula el valor de cada posicion en el array
/* const numeros = [20,14,22];
let sumaNumeros = numeros.reduce(function(acum, num){
    return acum + num;
})
console.log(sumaNumeros); */
//* forEach(), este va a recorrer el array pero no se puede devolver nada con return
/* const equipos = ['boca', 'river', 'tigre'];
let mostrarEquipos = equipos.forEach(function(equipo){
    console.log(equipo);
}); */

//* EJ 1 Playground
//* Ej 2 playground
let horariosPartida = [12, 14, 18, 21];
let agregarHora = horariosPartida.map(function(hora){
    let sumar = hora + 1;
    return sumar;
});
console.log(agregarHora);