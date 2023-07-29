const Enterprice = require('../models/Enterprice')
const cloudinary = require('../util/cloudinary')


module.exports = {
    AddEnterPrise: async (req, res) => {
        try {
            const post = await Enterprice.find()
            if (post) {
                await Enterprice.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title, description } = req.body
            await Enterprice.create({ title, description, image: imageurl })
            res.redirect('/admin/Enterprise')
        } catch (err) {
            console.log(err);
        }
    },
    renderEnterprice: async (req, res) => {
        try {
            const posts = await Enterprice.findOne()
            res.render('admin/Enterprice', { layout: 'adminlayout', posts })
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost: async (req, res) => {
        try {
            const { id } = req.params
            await Enterprice.findByIdAndDelete({ _id: id });
            res.redirect('/admin/Enterprise')
        } catch (err) {
            console.log(err);
        }
    },
    editpost: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await Enterprice.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/Enterprise')
        } catch (err) {
            console.log(err);
        }
    }

};
