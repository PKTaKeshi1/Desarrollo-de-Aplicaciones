/*****************************************
ARCHIVO	: usoRutas.js
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 27/10/2025 
DESCRIPCIÓN	: Aplicación Express que utiliza un módulo de rutas definido en otro archivo
********************************************/
var express = require('express');
var app = express();
var rutas = require('./rutas.js');

app.use('/', rutas);

app.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});
