// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'List of favorite websites',
  });
});
// Import website controller
var websiteController = require('../controllers/favoritesController');
// api endpoints
router
  .route('/websites')
  .get(websiteController.index)
  .post(websiteController.new);
router
  .route('/website/:website_id')
  .get(websiteController.view)
  .patch(websiteController.update)
  .put(websiteController.update)
  .delete(websiteController.delete);
// Export API routes
module.exports = router;
