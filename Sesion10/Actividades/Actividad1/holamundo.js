/*****************************************
ARCHIVO	: holamundo.js
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 27/10/2025 
DESCRIPCIÓN	: Aplicación básica de Node.js que crea un servidor HTTP
********************************************/
var http = require('http');
var server = http.createServer();

function mensaje(petic, resp) {
    resp.writeHead(200, { 'content-type': 'text/plain' });
    resp.write('Hola Mundo');
    resp.end();
}

server.on('request', mensaje);
server.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});
