var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Schema body
   ---------------------------------------------------- */
var UserSchema = new Schema({
	firstname: { type: String, required: [true, "Firstname is required"] },
	lastname: { type: String, required: [true, "Lastname is required"] },
	email: { type: String, required: [true, "Email is required"]},
	password: { type: String, required: [true, "password is required"]},
	mobile:{type:String,required: [true, "password is required"]},
	// mobile: {
	// 	type: String, 
	// 	required: [true, "Mobile number is required"],
	// 	min: [10, "Mobile number should be minimum 10 digits"],
	// 	max: [10, "maximum 10 characters are allowed"]
	// },
	// status: {
	// 	type: Number,
	// 	default: 1
	// },
	updated_at: { type: Date, default: Date.now }
});

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Email validation
   ---------------------------------------------------- */
UserSchema.path('email').validate(function (email) {
   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   return emailRegex.test(email); // Assuming email has a text attribute
}, 'Please enter email only')

module.exports = mongoose.model('User', UserSchema); // creates model