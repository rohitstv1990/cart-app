var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* = Author: Rohit Srivastava Update Date :05-052020
   = Schema body
   ---------------------------------------------------- */
var OrderSchema = new Schema({
	 itemName: { type: String, required: [true, "Item name is required"] },
	 itemDescription: { type: String, required: [true, "Description is required"] },
    itemPrice: { type: String, required: [true, "Price is required"]},
    deliveryAddress:{type:String,required:[true,"address is mandatory"]},
    orderDate: { type: Date, default: Date.now },
    contactNumber:{type:String,required:[true,"mobile number is mandatory"]},
    paymentType:{type:String,required:[true,"payment type is required"]},
    deliveryDate:{type:String,required:[true,"date is required"]},
    deliveryType:{type:String,require:[true,"type is required"]},
    itemCount:{type:Number,required:[true,"required"]},
    userId: {type:String,required:[true,"required"]},
    items:[{
      ProductId: { type: String, required: [true, "Item name is required"] },
		Category: { type: String, required: [true, "Item name is required"] },
		MainCategory: { type: String, required: [true, "Item name is required"] },
		SupplierName: { type: String, required: [true, "Item name is required"] },
		Weight: { type: String, required: [true, "Item name is required"] },
		ShortDescription:{ type: String, required: [true, "Item name is required"] },
		eUrl: { type: String, required: [true, "Item name is required"] },
		Status: { type: String, required: [true, "Item name is required"] },
		Price: { type: String, required: [true, "Item name is required"] },
		CurrencyCode: { type: String, required: ["true, Item name is required"] },
    }]

});

/* = Author: Rohit Srivastava Update Date :05-052020
   = Email validation
   ---------------------------------------------------- */
// UserSchema.path('email').validate(function (email) {
//    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//    return emailRegex.test(email); // Assuming email has a text attribute
// }, 'Please enter email only')

module.exports = mongoose.model('Order', OrderSchema); // creates model