const express = require('express');
const Contenedor = require('./contenedor.js')
const app = express();
const PORT = 8080;

const server = app.listen(process.env.PORT || PORT, () => {
    console.log('server escuchando en el puerto 8080');
});

server.on('error', err => console.log(`error: ${err}`));

const products = new Contenedor('products.txt');

app.get('/productos', async (req, res) => {
    const productos = await products.getAll();
    res.send(productos);
});

app.get('productoRandom', async (req, res) => {
    const productos = await products.getAll();
    let randomNumber = math.floor(math.random() * productos.lenght);
    res.send(productos[randomNumber])
})
