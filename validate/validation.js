var validator = require('express-validator');

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Register new user - validation rules
   ---------------------------------------------------- */
exports.userCreate = function(req, res, next) {
	const schema = {
		'firstname' : {
			notEmpty: true,
			errorMessage: "Firstname is required",
			isLength: {
				options: [{max:35}],
				errorMessage: "Firstname length should not be greater than 35 characters"
			},
			isAlpha: {
				errorMessage: "Enter only alpha characters"
			}
		},
		'lastname': {
			notEmpty: true,
			errorMessage: "Lastname is required",
			isLength: {
				options: [{max:35}],
				errorMessage: "Lastname length should not be greater than 35 characters"
			},
			isAlpha: {
				errorMessage: "Enter only alpha characters"
			}
		},
		'email': {
			notEmpty: true,
			errorMessage: "Email is required",
			isLength: {
				options: [{max: 128}],
				errorMessage: "Email length should not be greater than 128 characters"
			},
			isEmail: {
				errorMessage: "Please enter correct email id"
			}
		},
		'mobile': {
			notEmpty: true,
			errorMessage: "Mobile number is required",
			isLength: {
				options: [{min: 10, max: 10}],
				errorMessage: "Mobile number length must be 10 numeric characters"
			},
			isNumeric: {
				errorMessage: "Enter only numbers"
			}
		}
	}
	req.checkBody(schema);
	var errors = req.validationErrors();
	if(errors) {
		res.json({status:0, message:"Validation failed", result: errors});
	}
	else { //proceed
		next();
	}
};

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Update user - validation rules
   ---------------------------------------------------- */
exports.userUpdate = function(req, res, next) {
	const schema = {
		'id': {
		      notEmpty: true,
		      errorMessage: 'Id is required.',
		},
		'firstname' : {
			notEmpty: true,
			errorMessage: "Firstname is required",
			isLength: {
				options: [{max:35}],
				errorMessage: "Firstname length should not be greater than 35 characters"
			},
			isAlpha: {
				errorMessage: "Enter only alpha characters"
			}
		},
		'lastname': {
			notEmpty: true,
			errorMessage: "Lastname is required",
			isLength: {
				options: [{max:35}],
				errorMessage: "Lastname length should not be greater than 35 characters"
			},
			isAlpha: {
				errorMessage: "Enter only alpha characters"
			}
		},
		'email': {
			notEmpty: true,
			errorMessage: "Email is required",
			isLength: {
				options: [{max: 128}],
				errorMessage: "Email length should not be greater than 128 characters"
			},
			isEmail: {
				errorMessage: "Please enter correct email id"
			}
		},
		'mobile': {
			notEmpty: true,
			errorMessage: "Mobile number is required",
			isLength: {
				options: [{min: 10, max: 10}],
				errorMessage: "Mobile number length must be 10 numeric characters"
			},
			isNumeric: {
				errorMessage: "Enter only numbers"
			}
		},
	}
	req.checkBody(schema);
	var errors = req.validationErrors();
	if(errors) {
		res.json({status:0, message:"Validation failed", result: errors});
	}
	else { //proceed
		next();
	}
};