const mongoose = require('mongoose');

const portfolioSchema= new mongoose.Schema({
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

const portfolio = mongoose.model('portfolio',portfolioSchema);
module.exports = portfolio;