var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var SightingCtrl = require('./controllers/SightingCtrl')

var app = express();

app.use(bodyParser());
app.use(cors());

var mongoUri = "mongodb://localhost:27017/mini-birds-mongoose";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log('Connection to mongoDB successful')
});


app.get('/api/sighting', SightingCtrl.getSightings);
app.post('/api/sighting', SightingCtrl.postNewSighting);
app.put('/api/sighting/:id', SightingCtrl.editSighting);
app.delete('/api/sighting/:id', SightingCtrl.deleteSighting);




var port = 3000;

app.listen(port, function () {
    console.log('listening on port: ', port);
});