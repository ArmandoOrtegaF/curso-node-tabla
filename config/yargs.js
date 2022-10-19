const { describe } = require('yargs');

const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'Valor hasta el que llegará nuestra tabla'
                })
                .check((argv, options ) =>{
                    if(isNaN(argv.b) || isNaN(argv.h)){
                        throw 'La base y hasta tienen que ser números.';
                    }
                    return true;
                })
                .argv;

module.exports = argv;