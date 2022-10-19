const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();//borra la consola.


/* const [, , arg3 = 'base=5'] = process.argv;// pueds agregar valor por defecto
const [, base = 5] = arg3.split('=');
console.log(base); */

//const base = 3;

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow.bold, 'creado'.yellow))
    .catch(err => console.log(err));









