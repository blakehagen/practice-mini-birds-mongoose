var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema({
    
    name: {type: String, lowercase: true},
    order: {type: String, lowercase: true, maxlength: 20},
    status: {
        type: String,
        lowercase: true,
        
    }
    
    
    
    
    
})