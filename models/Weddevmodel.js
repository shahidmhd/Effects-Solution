const mongoose = require('mongoose');

const Webdevschema = new mongoose.Schema({
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

const Webdev = mongoose.model('Webdev',Webdevschema);
module.exports = Webdev;