//*Exportar librerias
let fs = require('fs');
let moment = require('moment');
let path = require('path');

//console.log(fs);


const ruta = fs.readFileSync(path.join(__dirname,'texto.txt'), 'utf-8');
console.log(ruta);


//*Libreria de fechas, le tenes que pasar moment como funcion y un .format para poner el formato en el que lo queres ver
console.log(moment().format('MMM DD YYYY'));

