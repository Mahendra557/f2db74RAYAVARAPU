var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Novel', { title: 'Search Results Novel' });
});

module.exports = router;
