// Importando paquetes y archivos necesarios conectarse con MongoDB
var mongoose = require('mongoose');

// Estableciendo conexion con MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/node-crud', {
  useNewUrlParser: true
});