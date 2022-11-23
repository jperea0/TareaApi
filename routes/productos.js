let router = require('express').Router();



router.get('/', (req, res) => {
    let respuesta = { Productos: 30, msg: "Los productos han sido devueltos" }
    res.json(respuesta);
})

router.get('/:idProducto', (req, res) => {
    console.log(req.params.idProducto);
    let respuesta = { Producto: 30, msg: "Este es el producto buscado", id: req.params.idProducto }
    res.json(respuesta);
});

module.exports = router;