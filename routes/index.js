let router = require('express').Router();

let clientes = require('./clientes')
router.use('/clientes', clientes)


let usuarios = require('./usuarios');
router.use('/usuarios', usuarios);

let productos = require('./productos');
router.use('/productos', productos);

let contactos = require('./contactos');
router.use('/contactos', contactos);

router.get('/', (req, res) => {
    res.status(200).json({ tipo: 200, msg: 'Conectado a API' });
});



//crear otros de producto y cliente
module.exports = router