var express = require('express');
var router = express.Router();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var coockieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const post = require('../assets/app/models/post');

var app = express();
mongoose.connect('mongodb://localhost:27017/tbp-2');

router.get('/node-mongodb-mongoose-user', function (req,res,next){
    res.render('node');
})

router.post('/node-mongodb-mongoose-user', function (req,res,next){
    var postObject = new post({
        content: req.body.content,
        user: req.body.user,
        likes: req.body.likes,
    });
    postObject.save();

    return res.status(200).send();
});


router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/posts', function(req, res, next){
        var postVar = req.body.postBody;
        res.redirect('/posts/' + postVar)
});

router.get('/posts/:postParam', function(req, res, next){
    res.render('node', {Post: req.params.postParam})

})



module.exports = router;
