var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');

var server = new hapi.Server();
server.connection({
  port: ~~process.env.PORT || 8000,
  // cross-origin request service === cros
  routes: { cors: {
                  credentials: true,
                  origin: ["*"]
              }
            }
});

mongoose.connect('mongodb://admin:admin@ds133922.mlab.com:33922/uxexamen');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.register([inert, auth], function(err){
  server.auth.strategy('session', 'cookie', {
    password: 'secretpasswordforencryptionafgafgadfgadfas',
    cookie: 'cafe-el-gringo-cookie',
    ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
    isSecure: false
  });
	server.route(
      // metodos disponibles create(post) body:{...},read(get)  queryString,params,update(put)  body:{...},delete(delete)  queryString,params
    routes.endpoints

  );

	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
