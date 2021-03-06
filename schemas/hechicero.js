var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var hechiceroSchema = new mongoose.Schema({
  username : String,
  pass: String,
  nombre: String,
  previaOcupacion: String,
  fechaNacimiento: String,
  paisOrigen: String,
  religion: String,
  fotoPerfil: String,
  hechizos: [String],
  amigos:[String]
});

hechiceroSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Hechicero', hechiceroSchema);
