// Import express
const express = require('express');
// Initialize express
const app = express();
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Import routes
let apiRoutes = require('./routes/endpoints.js');
// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(3000, function () {
  console.log('Running favorites_API on port 3000');
});
