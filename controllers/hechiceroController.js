var hechicero = require('../schemas/hechicero');
var mongoose = require('mongoose');
var moment = require('moment');
var SHA3 = require("crypto-js/sha3");
var boom = require("boom");

exports.createHechicero = {
  auth: {
    mode:'try',
    strategy:'session'
  },
  handler: function(request, reply){
    var hechiceros = new hechicero({
      username : request.payload.username,
      pass: String(SHA3(request.payload.pass)),
      nombre: request.payload.nombre,
      previaOcupacion: request.payload.previaOcupacion,
      fechaNacimiento: request.payload.fecha,
      paisOrigen: request.payload.pais,
      religion: request.payload.religion,
      fotoPerfil: request.payload.foto,
      hechizos: [],
      amigos: []
    });
    hechiceros.save(function(err){
      if(!err){
        return reply({
          success: true
        })
      }else{
        return reply({
          success: false
        })
      }
    });
  }
}

exports.getObjeto = {
  handler: function(request, reply){
    var objetos = objeto.find({username: request.params.username});
    reply(objetos);
  }
}
