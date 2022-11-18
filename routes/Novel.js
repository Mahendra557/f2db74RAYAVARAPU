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

router.get('/Novel/:id', Novel_controllers.Novel_detail); 
router.get('/detail', Novel_controllers.Novel_view_one_Page); 

router.get('/create', Novel_controllers.Novel_create_Page); 

router.get('/update', Novel_controllers.Novel_update_Page); 

router.get('/delete', Novel_controllers.Novel_delete_Page);

module.exports = router;