// Import express
const express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize express
const app = express();
// Import routes
let apiRoutes = require('./routes/endpoints.js');
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect(
  'mongodb://dvdgonzalez:mlab123@ds143461.mlab.com:43461/favorites',
  { useNewUrlParser: true }
);
var db = mongoose.connection;
// Added check for DB connection
if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(3000, function () {
  console.log('Running favorites_API on port 3000');
});
