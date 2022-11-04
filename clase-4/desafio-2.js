const fs = require('fs')

class Contenedor {
    constructor(file) {
        this.file = file;
    }
    async writeFile(data) {
        try {
            await fs.promises.writeFile(
                this.file, JSON.stringify(data, null, 2)
            )
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }

    async getAll() {
        try {
            const productos = await fs.promises.readFile(this.file, 'utf-8')
            return JSON.parse(productos);
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }

    async save() {
        let productos = await this.getAll();
        try {
            let newId;
            productos.length === 0 ? newId = 1 : newId = productos[productos.length - 1].id + 1;
            let newObj = { ...obj, id: newId };
            productos.push(newObj);
            await this.writeFile(productos);
            return newObj.id;
        }
        catch (err) {
            console.log(`error: ${err}`);
        }
    }
    getById = async (id) => {
        if (!id) return { status: 'error', message: 'se requiere ID' }
        if (fs.existsSync(productFile)) {
            let data = await fs.promises.readFile(this.file, 'utf-8')
            let products = JSON.parse(data)
            let product = products.find(product => product.id === id)
            if (product) return console.log({ status: 'Perfecto', message: product })
            return console.log({ status: 'error', message: 'No se reconoce el ID' })
        } else {
            return console.log({ status: 'error', message: err.message })
        }
    }
    async deleteById() {
        let productos = await this.getAll();
        try {
            productos = productos.filter(producto => producto.id !== id);
            await this.writeFile(productos);
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }
    async deleteAll() {
        try {
            await this.writeFile([])
        }
        catch (err) {
            console.log(`error: ${err}`);
        }
    }
}
module.exports = Contenedor;

const products = new Contenedor('products.txt');

async function test() {
    let save = await products.save({
        title: 'tele',
        price: 45,
        thumbnail: 'https:qwer1234'
    });
    let getAll = await products.getAll();
    let getById = await products.getById(2);
    let deleteById = await products.deleteById(1);
    let deleteAll = await products.deleteAll();
    console.log(save);
    console.log(getAll);
    console.log(getById);
    console.log(deleteById);
    console.log(deleteAll);
}

test();
