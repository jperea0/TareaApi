const Connection = require('mysql/lib/Connection');
const mysql = require('mysql')
const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'api'
});

mysqlconnection.connect((err) => {
    if (err) {
        console.log(err)
        return;
    } else {
        console.log('DB esta conectada')
    }
});

module.exports = mysqlconnection;
// el '../' sirve para regresarte a una carpeta anterior