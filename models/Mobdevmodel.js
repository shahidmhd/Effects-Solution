const mongoose = require('mongoose');

const Mobdevschema = new mongoose.Schema({
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

const Mobdev = mongoose.model('Mobdev',Mobdevschema);
module.exports = Mobdev;