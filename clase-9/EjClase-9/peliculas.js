const uuid = require('uuid');

const pelicula = [{
    nombre : 'Duro de matar',
    id : uuid.v4(),
    rating : 10,
    awards : 1,
    length : '2h',
    price : 150,
    genre : 'Accion',
},
{
    nombre : 'Toy Storie',
    id : uuid.v4(),
    rating : 8,
    awards : 7,
    length : '1h',
    price : 170,
    genre : 'Animacion',
},
{
    nombre : 'Maze Runner',
    id : uuid.v4(),
    rating : 9,
    awards : 0,
    length : '2h',
    price : 50,
    genre : 'Aventuras',
},
{
    nombre : 'Son como Niños',
    id : uuid.v4(),
    rating : 10,
    awards : 5,
    length : '2.5h',
    price : 1500,
    genre : 'Comedia',
},
{
    nombre : 'In Silence',
    id : uuid.v4(),
    rating : 6,
    awards : 0,
    length : '3h',
    price : 210,
    genre : 'Suspenso',
}];

//*para exportar una parte del codigo (en este caso el array con objetos)
module.exports = pelicula;