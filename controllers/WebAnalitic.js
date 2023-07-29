const WebAnalitic = require('../models/WebAnalitic')
const cloudinary = require('../util/cloudinary')
// const Post=require('../models/Postmodel')


module.exports = {
    AddWebAnalytics: async (req, res) => {
        try {
            const post = await WebAnalitic.find()
            if (post) {
                await WebAnalitic.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title, description } = req.body
            await WebAnalitic.create({ title, description, image: imageurl })
            res.redirect('/admin/WebAnalytics')
        } catch (err) {
            console.log(err);
        }
    },
    renderWebAnalytics: async (req, res) => {
        try {
            const posts = await WebAnalitic.findOne()

            res.render('admin/WebAnalitic', { layout: 'adminlayout', posts })
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost: async (req, res) => {
        try {
            const { id } = req.params
            await WebAnalitic.findByIdAndDelete({ _id: id });
            res.redirect('/admin/WebAnalytics')
        } catch (err) {
            console.log(err);
        }
    },
    editpost: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await WebAnalitic.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/WebAnalytics')
        } catch (err) {
            console.log(err);
        }
    }

};
