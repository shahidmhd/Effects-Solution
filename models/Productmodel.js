const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
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

const product = mongoose.model('product',productSchema);
module.exports = product;