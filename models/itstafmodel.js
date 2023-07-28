const mongoose = require('mongoose');

const itstafschema = new mongoose.Schema({
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

const itstaf = mongoose.model('itstaf',itstafschema);
module.exports =itstaf;