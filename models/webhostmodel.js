const mongoose = require('mongoose');

const webhostschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    }
});

const Webhost = mongoose.model('Webhost',webhostschema);
module.exports = Webhost;