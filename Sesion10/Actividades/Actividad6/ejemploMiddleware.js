/*****************************************
ARCHIVO	: ejemploMiddleware.js
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 27/10/2025 
DESCRIPCIÓN	: Aplicación Express que implementa un middleware para procesar peticiones HTTP
********************************************/
var express = require('express');
var app = express();

const middleware = function(req, res, next) {
    console.log('Ejecutando el middleware mientras llega la petición');
    next();
};

app.use(middleware);

app.get('/', function(req, res) {
    res.send('Llegó petición al servidor');
});

app.listen(3000, function() {
    console.log('Servidor en escucha en el puerto 3000');
});
