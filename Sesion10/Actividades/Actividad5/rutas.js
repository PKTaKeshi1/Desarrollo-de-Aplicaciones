/*****************************************
ARCHIVO	: rutas.js
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 27/10/2025 
DESCRIPCIÓN	: Módulo de rutas para una aplicación Express en Node.js
********************************************/
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Página principal');
});

router.get('/login', function(req, res) {
    res.send('Inicia sesión');
});

router.get('/productos', function(req, res) {
    res.send('Catálogo de productos');
});

router.get('/productos/compra', function(req, res) {
    res.send('Aquí puedes comprar tus productos');
});

module.exports = router;
