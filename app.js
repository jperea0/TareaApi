const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

/*app.get('/', (req, res) => {
    res.send('<html><body><h1>Hola mundo<h1> <p>desde express</p></body></html>')
})*/


app.use(express.json());
app.use(express.urlencoded({ extended: true })) //esto es dentro de un json


const router = require('./routes/index');
app.use('/api', router)
app.listen(3000, () => console.log("Listo"))