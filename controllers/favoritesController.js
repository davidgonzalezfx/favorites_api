// Import website model
Website = require('../models/websiteModel');
// Handle index actions
exports.index = function (req, res) {
  Website.get(function (err, websites) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Websites retrieved successfully',
      data: websites,
    });
  });
};
// Handle create website actions
exports.new = function (req, res) {
  var website = new Website();
  website.name = req.body.name ? req.body.name : website.name;
  website.gender = req.body.gender;
  website.email = req.body.email;
  website.phone = req.body.phone;
  // save the website and check for errors
  website.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: 'New website created!',
      data: website,
    });
  });
};
// Handle view website info
exports.view = function (req, res) {
  Website.findById(req.params.website_id, function (err, website) {
    if (err) res.send(err);
    res.json({
      message: 'Website details loading..',
      data: website,
    });
  });
};
// Handle update website info
exports.update = function (req, res) {
  Website.findById(req.params.website_id, function (err, website) {
    if (err) res.send(err);
    website.name = req.body.name ? req.body.name : website.name;
    website.gender = req.body.gender;
    website.email = req.body.email;
    website.phone = req.body.phone;
    // save the website and check for errors
    website.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: 'Website Info updated',
        data: website,
      });
    });
  });
};
// Handle delete website
exports.delete = function (req, res) {
  Website.remove(
    {
      _id: req.params.website_id,
    },
    function (err, website) {
      if (err) res.send(err);
      res.json({
        status: 'success',
        message: 'Website deleted',
      });
    }
  );
};
