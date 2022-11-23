let router = require('express').Router();
let contactocontroller = require('../db/controllers/contactoController')

router.get('/', (req, res) => {
    let resultado = { Nota: 20, msg: 'Hola' }
    contactocontroller.listar(req, res);
});

router.get('/:id', (req, res) => {
    let resultado = { Nota: 20, msg: 'Hola ' + req.params.id }
    contactocontroller.buscar(req, res);
});

router.post('/', (req, res) => {
    let resultado = { Nota: 20, msg: 'Hola' }
    let nombre = req.body.nombre
    let celular = req.body.celular
    let email = req.body.email
    let edad = req.body.edad
    let activo = req.body.activo
    let nombre2 = req.body.nombre2
    let edad2 = req.body.edad2
        /* if (!edad && !nombre && !celular && !email)
             res.json("{Tipo:501, msg: Datos incompletos}");*/
    contactocontroller.crear(req, res);
});

router.delete('/:id', (req, res) => {
    let resultado = { Nota: 20, msg: 'Hola' }
    contactocontroller.eliminar(req, res);
});

module.exports = router