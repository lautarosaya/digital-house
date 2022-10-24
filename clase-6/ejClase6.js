const electrodomesticos = ['Microondas', 'Heladera', 'Cocina', 'Horno', 'Licuadora', 'Tostadora']

/* Aleatorio */
/* const aleatorio = electrodomesticos[Math.floor(Math.random() * electrodomesticos.length)];
console.log(aleatorio); */

const borrarAddFinal = electrodomesticos.shift();
const addFinal = electrodomesticos.push(borrarAddFinal);
console.log(addFinal);