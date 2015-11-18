var Sighting = require('../models/sighting');

module.exports = {
    
    // read
    getSightings: function (req, res, next) {
        Sighting.find(req.query)
            .exec(function (err, result) {
                if (err) return res.status(500).send(err);
                else res.send(result);
            })
    },
    // create
    postNewSighting: function (req, res, next) {
        var newSighting = new Sighting(req.body);
        newSighting.save(function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    // update
    editSighting: function (req, res, next) {
        Sighting.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    // delete
    deleteSighting: function (req, res, next) {
        Sighting.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    }

}