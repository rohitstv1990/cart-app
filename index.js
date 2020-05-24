var express = require('express');
var app = express();

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = sets template engine for the application and set static files path to be executed
   ---------------------------------------------------- */
var path = require('path');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public/dist')));

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Parse incoming request bodies in a middleware before your handlers
   ---------------------------------------------------- */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = express-validation middleware for validating request
   ---------------------------------------------------- */
var validator = require('express-validator');
app.use(validator());

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = sets headers for the request
   ---------------------------------------------------- */
var cors = require('cors');
app.use(cors()); //set headers

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Mongoose connection
   ---------------------------------------------------- */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cart', {useMongoClient: true, promiseLibrary: global.Promise});
require('./routes/routes')(app); //added routing file for api routes
app.use('*', function(req, res) { //handle other nonregistered url/api
      res.sendFile(path.resolve('./public/dist/index.html'));
});

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = listen request on the given port
   ---------------------------------------------------- */
var port = process.env.PORT || 3001;
app.listen(port);
console.log("server started successfully... It listens on port 3001.");