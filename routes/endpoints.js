// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'List of favorite websites',
  });
});
// Export API routes
module.exports = router;
