var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//controllers
var SightingCtrl = require('./controllers/SightingCtrl');
var UserCtrl = require('./controllers/userCtrl');


//express
var app = express();

app.use(bodyParser());
app.use(cors());

//mognoose
var mongoUri = "mongodb://localhost:27017/mini-birds-mongoose";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connection to mongoDB successful')
});

/////////////
//SIGHTINGS//
/////////////
app.post('/api/sighting', SightingCtrl.create);
app.get('/api/sighting', SightingCtrl.get);
app.put('/api/sighting/:id', SightingCtrl.update);
app.delete('/api/sighting/:id', SightingCtrl.delete);

/////////////
////USERS////
/////////////
app.post('/api/user', UserCtrl.create);
app.get('/api/user', UserCtrl.read);
app.put('/api/user/:id', UserCtrl.update);
app.delete('/api/user/', UserCtrl.delete);


var port = 3000;

app.listen(port, function () {
    console.log('listening on port: ', port);
});