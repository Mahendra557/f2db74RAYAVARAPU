var Novel = require('../models/Novel');
// List of all Costumes
exports.Novel_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Novel list');
};
// for a specific Costume.
exports.Novel_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Novel detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Novel_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Novel create POST');
};
// Handle Costume delete form on DELETE.
exports.Novel_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Novel delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Novel_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Novel update PUT' + req.params.id);
};
// VIEWS

// List of all Costumes
exports.Novel_list = async function (req, res) {
    try {
        theNovel = await Novel.find();
        res.send(theNovel);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.Novel_view_all_Page = async function (req, res) {
    try {
        theNovel = await Novel.find();
        res.render('Novel', { title: 'Novel Search Results', results: theNovel });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume create on POST.
exports.Novel_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Novel();
    document.authorName = req.body.authorName;
    document.novelType = req.body.novelType;
    document.pages = req.body.pages;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }

};

exports.Novel_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Novel.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume update form on PUT. 
exports.Novel_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Novel.findById(req.params.id)
        // Do updates of properties 
        if (req.body.authorName)
            toUpdate.authorName = req.body.authorName;
        if (req.body.novelType) toUpdate.novelType = req.body.novelType;
        if (req.body.pages) toUpdate.pages = req.body.pages;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// Handle Costume delete on DELETE. 
exports.Novel_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Novel.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle a show one view with id specified by query 
exports.Novel_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Novel.findById(req.query.id)
        res.render('Noveldetail',
            { title: 'Novel Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


exports.Novel_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Novelcreate', { title: 'Novel Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}; 

exports.Novel_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Novel.findById(req.query.id) 
        res.render('Novelupdate', { title: 'Novel Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query
exports.Novel_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Novel.findById(req.query.id)
    res.render('Noveldelete', { title: 'Novel Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };