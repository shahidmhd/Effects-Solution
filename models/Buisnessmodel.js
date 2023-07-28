const mongoose = require('mongoose');

const Buisnessschema = new mongoose.Schema({
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

const Buisness = mongoose.model('Buisness',Buisnessschema);
module.exports = Buisness;