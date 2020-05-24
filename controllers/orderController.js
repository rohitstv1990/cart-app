var mongoose = require('mongoose');
var Order = require('../models/order'); //created model loading here

/* = Author: Rohit Srivastava, Update Date: 05-05-2020
   = List users
   ---------------------------------------------------- */
exports.index = function(req, res) {
	Order.find({}, function(error, orders) {
		if(error) {
			return res.json({status: 0, message: "Something went wrong", result: error});
		}
		res.json({status: 1, result: orders, count: orders.length});
	});
};

/* = Author: Rohit Srivastava, Update Date: 05-05-2020
   = Register new user
   ---------------------------------------------------- */
exports.create = function(req, res) {
	var order = new Order(req.body);
	order.save(function(error) {
		if(error) {
			return res.json({status: 0, message: "Something went wrong", result: error});
		}
		res.json({status: 1,  message: "Ordered successfully..."});
	});
};

/* = Author: Rohit Srivastava, Update Date: 05-05-2020
   = Single user view
   ---------------------------------------------------- */
exports.view = function(req, res) {
	console.log("id:",req.params.id)
	Order.findOne({"_id":req.params.id}, function(error, order) {
		if(error) {
			return res.json({status: 0, message: error});
		}
		res.json({status: 1, result: order});
	});
};

/* = Author: Rohit Srivastava, Update Date: 05-05-2020
   = Update user
   ---------------------------------------------------- */
exports.update = function(req, res) {
	console.log("id:"+req.params.id),
	Order.findOneAndUpdate({'_id': req.params.id}, req.body, {new: true}, function(error, order){
		if(error) {
			return res.json({status: 0, message: "Something went wrong", result: error});
		}
		res.json({status: 1, message: "Order updated successfully..."});
	});
};

/* = Author: Rohit Srivastava, Update Date: 05-05-2020
   = Delete user
   ---------------------------------------------------- */
exports.delete = function(req, res) {
	console.log("id:"+req.params.id);
	//var id = JSON.parse(req.params.id);
	
	//var id = Jreq.params.id);
	//const obj = JSON.parse(json);
	
	if(!mongoose.Types.ObjectId.isValid(req.params.id)){
		console.log("invalid id")
	}
	Order.findByIdAndRemove({'_id':req.params.id }, function(error, order){
		if(error) {
			return res.json({status: 0, message: "Something went wrong", result: error});
		}
		res.json({status: 1, message: "Order deleted successfully..."});
	});
};