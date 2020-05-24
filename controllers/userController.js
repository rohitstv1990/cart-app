var mongoose = require('mongoose');
var User = require('../models/user'); //created model loading here

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = List users
   ---------------------------------------------------- */
exports.index = function (req, res) {
	User.find({}, function (error, users) {
		if (error) {
			return res.json({ status: 0, message: "Something went wrong", result: error });
		}
		res.json({ status: 1, result: users, count: users.length });
	});
};

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Register new user
   ---------------------------------------------------- */
exports.create = function (req, res) {
	var user = new User(req.body);
	user.save(function (error) {
		if (error) {
			return res.json({ status: 0, message: "Something went wrong", result: error });
		}
		res.json({ status: 1, message: "User created successfully..." });
	});
};

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Single user view
   ---------------------------------------------------- */
exports.view = function (req, res) {
	User.findOne(req.params.id, function (error, user) {
		if (error) {
			return res.json({ status: 0, message: error });
		}
		res.json({ status: 1, result: user });
	});
};

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Update user
   ---------------------------------------------------- */
exports.update = function (req, res) {
	User.findOneAndUpdate({ '_id': req.body.id }, req.body, { new: true }, function (error, user) {
		if (error) {
			return res.json({ status: 0, message: "Something went wrong", result: error });
		}
		res.json({ status: 1, message: "Order updated successfully..." });
	});
};

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Delete user
   ---------------------------------------------------- */
exports.delete = function (req, res) {
	User.remove({ '_id': req.params.id }, function (error, user) {
		if (error) {
			return res.json({ status: 0, message: "Something went wrong", result: error });
		}
		res.json({ status: 1, message: "User deleted successfully..." });
	});
};
exports.login = function (req, res) {
	console.log("inside login")
	User.findOne({ 'mobile': req.params.mobile }, function (error, user) {
		if (error) {
			return res.json({ status: 0, message: "Something went wrong", result: error });
		}
		res.json({ status: 1, message: "User login successfully..." });
	});
};
// exports.validate = function (req, res) {
//     console.log("inside sms")
//     key="60ece0f31ae5986e02cc9cb9e825ac27e3d4af7f06f133d3"
//     sid="demo525"
//     token="72fec8a54a4da86fc41e5eb36c200f994a5ec16df7d75842"
//     from="08047191488"
//     to="09955181432"
//     body="Hello Bro"
    
//     const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
    
//     const axios = require('axios')
//     url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Sms/send.json"
//     axios.post(url, 
//        formUrlEncoded({
//       "From": from,
//       "To": to,
//       "Body":body
//     }),
//     {   
//         withCredentials: true,
//         headers: {
//             "Accept":"application/x-www-form-urlencoded",
//             "Content-Type": "application/x-www-form-urlencoded"
//         }
//       },
//       )
//     .then((res) => {
//       console.log(`statusCode: ${res.statusCode}`)
//       console.log(res)
//     })
//     .catch((error) => {
//       console.error(error)
//     });
//     };
exports.validate = function (req, res) {
const accountSid = 'AC6c7b3de3ea3337d6b6a3b9de3bf4b835';
const authToken = 'dabc60a48fef006b2346f745445e4ac6';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is msg sent by Rohit Srivastava using node.js code from twilio for cart app',
     from: '+12076067398',
     to: '+919650691178'
   })
  .then(message => console.log(message.sid));
    };