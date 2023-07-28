const mongoose = require('mongoose');

const Digitalmarketnigschema = new mongoose.Schema({
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

const Digital = mongoose.model('Digital',Digitalmarketnigschema);
module.exports = Digital;