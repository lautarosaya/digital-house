const fs = require('fs');
const path = require('path');

const importar = (marca) =>{
    switch (marca) {
        case 'Hot Toys':
            route = fs.readFileSync(__dirname + '/datos/figuras1.json','utf-8');
            break;
        case 'Bandai':
            route = fs.readFileSync(path.join(__dirname, 'datos/figuras2.json'), 'utf-8');
            break;
        case 'Star Wars':
            route = fs.readFileSync(path.join(__dirname, 'datos/figuras3.json'), 'utf-8');
            break;
        default:
            break;
    }
}

console.log(importar('Hot Toys'));

