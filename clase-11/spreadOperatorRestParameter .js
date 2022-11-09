//*Juntar dos arrays en uno
/* let frutasUno = ["Banana", "Naranja", "Sandia"];
let furtasDos = ["Mandarina", "Manzana"];

let todasLasFrutas = [...frutasUno, ...furtasDos];
console.log(todasLasFrutas); */
//* Juntar objetos
/* 
let cursada = {
  curso: "fullstack",
  turno: "noche",
  sede: "La emilia",
};

let alumnoUno = {
  nombre: "lautaro",
  email: "lautaro@gmail.com",
  ...cursada,
};

let alumnoDos = {
  nombre: "camila",
  turno: "mañana",
  ...cursada,
};
console.log(alumnoDos) */

//*Lo mismo pero en fucntion
/* const peliculas = (...peliculasVistas) => {
  console.log(peliculasVistas);
};
//*Lo devuelve en forma de array
peliculas("Messi", "EL bicho"); */

//* Otra forma
/* const peliculas = (...peliculasVistas) => {
  for (let i = 0; i < peliculasVistas.length; i++) {
    console.log(`El chaval vio ${peliculasVistas[i]}`);
  }
};

peliculas("Messi", "Bichos", "Machete");
 */
