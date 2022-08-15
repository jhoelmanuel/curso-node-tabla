const fs = require('fs');

const createFile = async( base = 5, listar = false , hasta = 10) =>{
    try {
        let salida = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base*i}\n`;
        }

        if (listar){
            console.log('=======================');
            console.log(`      Tabla del ${base}`);
            console.log('=======================');
            console.log(salida)
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
        return `Tabla del ${base} creada correctamente.`;    
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createFile
}