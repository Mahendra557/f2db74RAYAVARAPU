var Novel = require('../models/Novel');
// List of all Costumes
exports.Novel_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Novel list');
};
// for a specific Costume.
exports.Novel_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Novel detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Novel_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Novel create POST');
};
// Handle Costume delete form on DELETE.
exports.Novel_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Novel delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Novel_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Novel update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.Novel_list = async function(req, res) {
    try{
    theNovel = await Novel.find();
    res.send(theNovel);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Novel_view_all_Page = async function(req, res) {
    try{
    theNovel = await Novel.find();
    res.render('Novel', { title: 'Novel Search Results', results: theNovel });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Novel_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Novel();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.authorName = req.body.authorName;
    document.novelType = req.novelType;
    document.pages = req.body.pages;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}