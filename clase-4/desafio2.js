const fs = require('fs')

class Contenedor {
    
    constructor( ruta ){    // an Array
        this.ruta = ruta    //object
    }
    
    async save( producto ){
        let data = null
            try{
                data = await fs.promises.readFile('./Productos.txt', 'utf-8')
            }catch (error){
                console.log(`no lei archivo: ${error}`)
            }
        let id = 0
        let dataObj = null
        let json = null
            if( data == 0 ){
                id = 1
            }else{
                try{
                    id = 3
                    const dato = await fs.promises.readFile('./Productos.txt', 'utf-8')
                    json = JSON.parse(dato)
                    console.log(json.id)
                }catch (error){
                    console.log(`no pude leer el parse para sacar id: ${error}`)
                }
            }
        
        const newObj = {id: id, ...producto}
        
        try{
            fs.appendFileSync('./Productos.txt', JSON.stringify( newObj, null, 2 ))
        }catch (error){
            throw new Error(`Fallo al esciribir el archivo: ${error}`)
        }
    }
}

const File = new Contenedor([]) //content of all

File.save( { nombre: "PC", precio: 1000, thumbnail: "ctm" } )