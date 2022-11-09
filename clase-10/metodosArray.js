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
/* let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function(nota){
    return nota.aprobado == true;
});
let desaprobados = estudiantes.filter(function(nota){
    return nota.aprobado == false;
}) 
console.log(desaprobados); */
//* Ej 2 playground
/* let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(function(hora){
    return hora - 1;
});
console.log(horariosAtrasados); */
//*Ej Tres playgrond
/* let vueltas = [5, 8, 12, 3, 22];
let totalVueltas = vueltas.reduce(function(acum, num){
    return acum + num;
});
console.log(totalVueltas); */

//*Ej 4 Playground
/* let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

let mostrarLista = listaDeSuperMercado.forEach(function(cosas){
    console.log(cosas);
}) */

//* arrow function
/* let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

let mostrarLista = listaDeSuperMercado.forEach((cosas) => {
    console.log(cosas);
}) */