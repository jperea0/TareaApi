const mysql = require('../mysql')

module.exports = {
    crear: (req, res) => {
        //post
        /*mysql.query('INSERT INTO contacto SET ?', req.body, (err, results, fields) => {
            if (err) {
                res.json(err);
            } else {
                console.log(results);
                res.json(results);
            }
        });*/
        console.log(req.body)
        let cadSql = `INSERT INTO contacto (nombre,celular,email,edad,activo) values 
        ('${req.body.nombre}',${req.body.celular},'${req.body.email}',${req.body.edad},${req.body.activo})`;
        mysql.query(cadSql, (err, results, fields) => {
            if (err) {
                console.log(err)
                    //res.json(err);
            } else {
                console.log(req.body.dependientes.length)
                for (let i = 0; i < req.body.dependientes.length; i++) {
                    mysql.query(`INSERT INTO dependientes (nombre,edad,contacto) values ('${req.body.dependientes[i].nombre}', ${req.body.dependientes[i].edad}, ${results.insertId})`, (err, results, fields) => {
                        console.log(req.body.dependientes)
                        if (err) {
                            //  res.json(err);
                            console.log(err)
                        } else {
                            console.log(results);
                        }
                    })
                }
                // res.json({ msg: 'holsssss' });
            }
        })
    },


    eliminar: (req, res) => {
        //delete
        mysql.query('DELETE from contacto WHERE id=?', req.body.id, (error, results, fields) => {
            if (error) {
                res.json(error);
            } else {
                mysql.query('DELETE from dependientes WHERE contacto=?', req.body.id, (error, results, fields) => {
                    if (error) {
                        res.json(error);
                    } else {
                        res.json('Registros eliminados');
                    }
                })
            }
        });
    },


    listar: (req, res) => {
        //get
        mysql.query('SELECT * from contacto', req.body, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
                mysql.query('SELECT * from dependientes', req.body, (error, results, fields) => {
                    if (error) {
                        res.json(error)
                    } else {
                        res.json(results)
                    }
                });
            }
        });
    },


    buscar: (req, res) => {
        //get/.id
        mysql.query('SELECT * from contacto WHERE id=?', req.params.id, (error, results, fields) => {
            if (error) {
                res.json(error);
            } else {
                console.log(results)
                res.json(results);
                mysql.query('SELECT * from dependientes WHERE contacto=?', req.params.id, (error, results, fields) => {
                    if (error) {
                        res.json(error);
                    } else {
                        console.log(results)
                        res.json(results);
                    }
                });
            }
        });
    }
}