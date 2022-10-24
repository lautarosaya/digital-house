/* 
*indexof() 
*/
/* 
*busca la palabra dentro de un string 
*/
/* console.log('Menem junior'.indexOf('junior')); */
/*te devuelve el numero donde empieza la palabra, y si n esta esa palabra te devuelve un -1 */

/* 
*slice() 
*/
/* 
*este te deja sacar una porcion del string, como parametro le pasas la pocicion de inicio y la del final 
*/
/* const saludo = 'Hola como estas, tanto tiempo';
console.log(saludo.slice(17, 30)); */

/* 
*ejemplo junto 
*/

//const fraseEj = 'Quiero buscar la frase que aparezca acá';
/* Te fijas cual es la longitud total para saber que numero es la ultima posicion */
//console.log(fraseEj.length);
/* Le preguntas para saber cual es la posicion de la palabra donde queres empezar */
//console.log(fraseEj.indexOf('la'));
/* Sabiendo la ultima posicion y la posicion de la palabra donde queres empezar solo las tenes que poner como parametro de un slice */
//console.log(fraseEj.slice(14, 39));

/* 
*trim()
*/
/* 
*elimina los espacios en blanco que esten a los lados
*/

/* const prueba = ' hola mundo ';
console.log(prueba.trim());
console.log(prueba); */

/* 
*split(), este convierte los string en array. te pide como parametro que es lo que queres obviar, todo lo otro lo va a convertir en string
*/

/* const frase = 'soy de boca juniors';
console.log(frase.split(' ')); */

/* 
*replace(), se usa para remplasar un pedazo del string. le pasas dos parametros el de texto que queres remplazar y por el que lo queres remplazar
*/

/* const messi = 'messi es el peor jugador del mundo';
console.log(messi.replace('peor', 'mejor')); */

/* 
*Ej playground 1 
*/

/* function dominio (string) {
    return "http://www." + string;
}
console.log(dominio('digitalhouse.com.ar')); */

/* Ej playground 2 */

/* const frase = 'hola mundo';
console.log(frase.length); */

/* 
*Ej playground tres 
*/

/* const reemplazoFastFast = (texto, palabraBuscar, palabraReemplazar) => {
    textoNuevo = texto.replace(palabraBuscar, palabraReemplazar);
    return textoNuevo;
}
console.log(reemplazoFastFast('hola mundo', 'mundo', 'gente')); */

/* function reemplazoFastFast (texto, palabraBuscar, palabraReemplazar) {
    textoNuevo = texto.replace(palabraBuscar, palabraReemplazar);
    return textoNuevo;
}
console.log(reemplazoFastFast('hola mundo', 'mundo', 'gente')); */

/* 
*Ej playground 4
*/

/* const menciona = (texto, palabra) => {
    let rta = texto.indexOf(palabra);
    return rta != -1 ? true: false;
}

console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos', 'programación')); */ 

/* function menciona (texto, palabra) {
    let rta = texto.indexOf(palabra);
   return rta != -1 ? true: false;
}

console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos', 'pedro')); */

/* 
*Ej playground 5
*/

/* let frase = 'Hola!, soy Carli';
console.log(frase.length);
console.log(frase.indexOf('Carli'));
const licenciada = frase.slice(11, 16)
console.log(licenciada); */