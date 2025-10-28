/*****************************************
ARCHIVO	: index.js
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 27/10/2025 
DESCRIPCIÓN	: Aplicación básica de Node.js que sirve un archivo HTML a través de un servidor HTTP
********************************************/
var http = require('http'),
    fs = require('fs');

var html = fs.readFileSync("./index.html");

http.createServer(function(req, res) {
    res.write(html);
    res.end();
}).listen(3000);
