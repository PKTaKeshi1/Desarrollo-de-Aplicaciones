/*****************************************
ARCHIVO	: index.js
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 27/10/2025 
DESCRIPCIÓN	: Aplicación básica de Node.js que utiliza el framework Express para manejar rutas HTTP
********************************************/
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hola mundo desde Express');
});

app.get('/login', function(req, res) {
    res.send('Aquí se mostraría la página del login');
});

app.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});
