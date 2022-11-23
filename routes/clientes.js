let router = require('express').Router();


router.get('/', (req, res) => {
    console.log(req.body);
    let respuesta = { nota: 20, msg: "Dato recibido" };
    res.json(respuesta);
})

router.get('/:idcliente', (req, res) => {
    console.log(req.params.idcliente);
    let respuesta = { nota: 20, msg: "Dato solo recibido", ID: req.params.idcliente };
    res.json(respuesta);
})

router.post('/', (req, res) => {
    console.log(req.body);
    let res2 = { tipo: 220, msg: 'resultado de un post' };
    res.json(res2);
})

module.exports = router