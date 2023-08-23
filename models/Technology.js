const mongoose = require('mongoose');

const Technologyschema = new mongoose.Schema({
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

const Technology = mongoose.model('Technology',Technologyschema);
module.exports = Technology;