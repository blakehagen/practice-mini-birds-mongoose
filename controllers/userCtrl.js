var User = require('../models/user');

module.exports = {

    create: function (req, res) {
        new User(req.body).save(function (err, user) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(user);
            }
        });
    },

    read: function (req, res) {
        User.find().then(function (user) {
            res.send(user);
        });
    },

    update: function (req, res) {
        User.findbyIdAndUpdate(req.params.id, req.body, function (err, user) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(user);
            }
        });
    },

    delete: function (req, res) {
        User.findByIdAndRemove(req.query.id, function (err, user) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(user);
            }
        });
    }





};