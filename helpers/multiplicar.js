const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar=false , hasta = 10)=>{

    try {

        
        
    
    
        let salida  = '';
        let consola = '';
    
        for(let a = 1; a <= hasta ; a++){
        
            salida += (`(${base} x ${a}) = ${base * a}\n`);
            consola += (`(${base} ${'x'.green} ${a}) ${'='.green} ${base * a}\n`);
        }

        if(listar){
            console.log('===================='.green);
            console.log(' Tabla del:'.green,colors.blue(base));
            console.log('===================='.green);
            console.log(consola);

         }
       
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
        return`tabla-${base}.txt creado`;

    }catch(err){
            throw(err);
    }
    

}

module.exports = {
    crearArchivo
}