// create web server
var express = require('express');
var router = express.Router();

// create comment model
var Comment = require('../models/comment.js');

// create comment post method
router.post('/', function(req, res, next) {
    // create comment object
    var comment = new Comment({
        username: req.body.username,
        content: req.body.content
    });

    // save comment object
    comment.save(function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        // redirect to home page
        res.redirect('/');
    });
});

// export module
module.exports = router;