var Sighting = require('../models/sighting');

module.exports = {
    
    // get/read
    get: function (req, res, next) {
        Sighting.find().populate('user').exec().then(function (sightings, err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(sightings);
            }
        })
    },
   
    // create
    create: function (req, res, next) {
        var newSighting = new Sighting(req.body);
        newSighting.save(function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    // update
    update: function (req, res, next) {
        Sighting.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    // delete
    delete: function (req, res, next) {
        Sighting.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    }

}