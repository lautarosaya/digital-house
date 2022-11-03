//*requerir las bibliotecas necesarias para la ejecucion
const fs = require('fs');
const path = require('path');
const peliculas = require('./peliculas'); //! aca se pasa la direccion del archivo de lo que importamos.

//*recorrer el array con objetos para mostrar cada elemento de un objeto
for (let i = 0; i < peliculas.length; i++) {
    const objeto = peliculas[i];
    console.log(`La pelicula ${objeto.nombre} (id: ${objeto.id}) del genero ${objeto.genre}, tuvo un puntaje de ${objeto.rating} y gano ${objeto.awards} premios. Esta tiene una duracion de ${objeto.length} y un costo de $${objeto.price}.`);
}

//*fs para mostrar el contenido de un txt
const ruta = fs.readFileSync(path.join(__dirname,'mensaje.txt'),'utf-8');
console.log(ruta);