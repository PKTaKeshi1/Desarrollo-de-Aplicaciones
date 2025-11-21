// Importando paquetes y archivos necesarios para crear estructura de documentos para colección
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  amount: Number,
  description: String
});

module.exports = mongoose.model('products', ProductSchema);