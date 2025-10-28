/*****************************************
ARCHIVO	: testing.js
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 27/10/2025 
DESCRIPCIÓN	: Aplicación básica de Node.js que se conecta a una base de datos MySQL y realiza una consulta
********************************************/
var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'musicdb',
    user: 'root',
    password: ''
});

conexion.connect(function(err) {
    if (err) {
        console.log("Error de conexión: " + err.stack);
        return;
    }
    console.log("Conectado al ID " + conexion.threadId);
});

conexion.query('SELECT * FROM albums', function(error, results) {
    if (error) throw error;
    results.forEach(element => {
        console.log(element);
    });
});

conexion.end();

