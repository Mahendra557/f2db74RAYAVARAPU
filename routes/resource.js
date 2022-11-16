var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Novel_controller = require('../controllers/Novel');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Novel', Novel_controller.Novel_create_post);
// DELETE request to delete Costume.
router.delete('/Novel/:id', Novel_controller.Novel_delete);
// PUT request to update Costume.
router.put('/Novel/:id', Novel_controller.Novel_update_put);
// GET request for one Novel.
router.get('/Novel/:id', Novel_controller.Novel_detail);
// GET request for list of all Novel items.
router.get('/Novel', Novel_controller.Novel_list);


module.exports = router;