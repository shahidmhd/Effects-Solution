const mongoose = require('mongoose');

const Addbannerschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    image:{
        type:String,
        required:true
    }
});

const Banner = mongoose.model('Banner',Addbannerschema);
module.exports = Banner;