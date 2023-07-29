const Digital = require('../models/Digitalmarketing')
const cloudinary = require('../util/cloudinary')


module.exports = {
    AddDigital: async (req, res) => {
        try {
            const post = await Digital.find()
            if (post) {
                await Digital.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title, description } = req.body
            await Digital.create({ title, description, image: imageurl })
            res.redirect('/admin/Digitalmarketing')
        } catch (err) {
            console.log(err);
        }
    },
    renderDigitalmarketing: async (req, res) => {
        try {
            const posts = await Digital.findOne()
            res.render('admin/Digitalmarketing', { layout: "adminlayout", posts })
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost: async (req, res) => {
        try {
            const { id } = req.params
            await Digital.findByIdAndDelete({ _id: id });
            res.redirect('/admin/Digitalmarketing')
        } catch (err) {
            console.log(err);
        }
    },
    editpost: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await Digital.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/Digitalmarketing')
        } catch (err) {
            console.log(err);
        }
    }
};
