const argv = require('yargs')
                .option({'b':{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                },
                'l':{
                    alias:'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'Muestar la tabla en consola'
                },
                'h':{
                    alias:'hasta',
                    type:'number',
                    demandOption: false,
                    default: 10,
                    describe:'Numero de veces que se va a multipriclar la base'
                }})
                .check( (argv, options) => {
                    if(isNaN( argv.b )){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv

module.exports = argv;