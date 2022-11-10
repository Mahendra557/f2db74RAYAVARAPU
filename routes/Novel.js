var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Novel', { title: 'Search Results Novel' });
});
var express = require('express');
const Novel_controllers= require('../controllers/Novel');
var router = express.Router();
/* GET costumes */
router.get('/', Novel_controllers.Novel_view_all_Page );
module.exports = router;