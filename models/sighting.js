var mongoose = require('mongoose');

var sightingModel = new mongoose.Schema({

    name: { type: String, lowercase: true },
    order: { type: String, lowercase: true, maxlength: 20 },
    status: {
        type: String,
        lowercase: true,
        enum: [
            'extinct',
            'extinct in wild',
            'critically endangered',
            'endangered',
            'vulnerable',
            'near threatened',
            'conservation dependent',
            'least concern'
        ]
    },
    confirmed: { type: Boolean, default: false },
    numberSeen: { type: Number, min: 1 }
})


sightingModel.pre('save', function (next) {
    var sighting = this;
    sighting.updatedAt = new Date();
    next();
})

module.exports = mongoose.model('sighting', sightingModel);