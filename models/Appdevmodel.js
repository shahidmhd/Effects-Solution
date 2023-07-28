const mongoose = require('mongoose');

const Appdevschema = new mongoose.Schema({
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

const Appdev = mongoose.model('Appdev',Appdevschema);
module.exports = Appdev;