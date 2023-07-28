const mongoose = require('mongoose');

const ecommerceschema = new mongoose.Schema({
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

const Ecommerce = mongoose.model('Ecommerce',ecommerceschema);
module.exports = Ecommerce;