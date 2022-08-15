const {createFile} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
//option('l')
//listar
//boolean
//default: false

console.clear();

// console.log(process.argv);
// const [ , , arg3 ='base=5'] = process.argv; 
// const [ , base] = arg3.split('=');

console.log(argv);

// console.log('base: yargs', argv.base)


// console.log(base);

createFile(argv.base,argv.listar,argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));