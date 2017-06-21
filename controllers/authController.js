var joi = require('joi');
var boom = require('boom');
var hechicero = require('../schemas/hechicero');
var SHA3 = require("crypto-js/sha3");

exports.login = {
    auth: false,
    validate: {
      payload: {
        username: joi.string().required(),
        pass: joi.string().required(),
      }
    },
    handler: function(request, reply) {
      console.log(request.payload.username);
      var pass = String(SHA3(request.payload.pass));
      hechicero.find({username: request.payload.username, pass:pass}, function(err, empleado){
          if(!err){
            if(hechicero.length > 0){
              request.cookieAuth.set(hechicero[0]);
              return reply({username: hechicero.username, success:true});
            }
            return reply({message: boom.unauthorized('Wrong email or password'), success:false});
          }
          return reply({ message: boom.notAcceptable('Error Executing Query'), success: false});
      });
    }
};
exports.logout = {
    auth: {
      mode:'required',
      strategy:'session'
    },
    handler: function(request, reply) {
      request.cookieAuth.clear();
      return reply('Logout Successful!');
    }
  };
