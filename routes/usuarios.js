let router = require('express').Router();


router.get('/', (req, res) => {
    let respuesta = { Users: 30, msg: "Los usuarios han sido encontrados" }
    res.json(respuesta);
})

router.get('/:idusers', (req, res) => {
    console.log(req.params.idusers);
    let respuesta = { Users: 30, msg: "Este es el usuario buscado", id: req.params.idusers }
    res.json(respuesta);
});

module.exports = router;