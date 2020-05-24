var controller = require('../controllers/userController');
var validate = require('../validate/validation');
var orderController = require('../controllers/orderController');
var smsController = require('../controllers/smsController');

/* = Author: Rohit Srivastava, Update Date: 05-05-2020
   = Handles routing for the api
   ---------------------------------------------------- */
module.exports = function(app) {
	console.log("insdise controller");
	app.get('/api/users', controller.index);
	app.post('/api/users', validate.userCreate, controller.create);
	app.get('/api/user/:id', controller.view);
	app.put('/api/user/:id/update', validate.userUpdate, controller.update);
	app.get('/api/users/:mobile', controller.login);
	app.delete('/api/user/:id', controller.delete);
	app.get('/api/orders', orderController.index);
	app.post('/api/orders', orderController.create);
	app.get('/api/orders/:id', orderController.view);
	app.put('/api/order/:id/update', orderController.update);
	app.delete('/api/order/:id/delete', orderController.delete);
	app.post('/api/user/validate',  controller.validate);
}