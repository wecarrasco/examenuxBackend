var authController = require('./controllers/authController');
var hechiceroController = require('./controllers/hechiceroController')

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API Examen UX')}}},
	{method: 'POST', path: '/monasterio/createhechicero', config: hechiceroController.createHechicero},
	/*{method: 'GET', path: '/monasterio/hechicero/{username}', config: hechiceroController.getObjeto},
  {method: 'PUT', path: '/monasterio/updateobjeto/{username}', config: hechiceroController.updateObjeto},
	{method: 'DELETE', path: '/monasterio/deleteobjeto/{username}', config: hechiceroController.deleteObjeto},
	{method: 'GET', path: '/monasterio/objetos', config: hechiceroController.getAllObjeto},*/
	{method: 'POST', path: '/monasterio/login', config: authController.login},
	{method: 'GET', path: '/monasterio/logout', config: authController.logout}
];
