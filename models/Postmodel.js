const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
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

const Post = mongoose.model('post',PostSchema);
module.exports = Post;