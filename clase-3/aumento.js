const name = 'Lautaro'
const lastName = 'Sayavedra'
const sueldoActual = 20000
const porcentajeAumento = 25

calculoAumneto = sueldoActual * (porcentajeAumento /100)
nuevoSueldo = sueldoActual + calculoAumneto

console.log('El sueldo actual es de: ' + sueldoActual);
console.log('El aumento que recibio es de: 25%');
console.log('El aumento es de: ' + calculoAumneto);

console.log('El nuevo sueldo es de: ' + nuevoSueldo);