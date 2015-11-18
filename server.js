var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


var app = express();

app.use(bodyParser());
app.use(cors());


app.get('/', function(req, res, next){
    res.send('HELLO!');
});










var port = 3000;
var mongoUri = 'mongodb://localhost:27017/practice-mini-birds-mongoose';

app.listen(port, function () {
    console.log('listening on port: ', port);
});