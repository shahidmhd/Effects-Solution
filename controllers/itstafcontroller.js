const itstaf = require('../models/itstafmodel')
const cloudinary = require('../util/cloudinary')
// const Post=require('../models/Postmodel')


module.exports = {
    Additstaf: async (req, res) => {
        try {
            const post = await itstaf.find()
            if (post) {
                await itstaf.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title, description } = req.body
            await itstaf.create({ title, description, image: imageurl })
            res.redirect('/admin/itstaf')
        } catch (err) {
            console.log(err);
        }
    },
    renderitstaf: async (req, res) => {
        try {
            const posts = await itstaf.findOne()
            res.render('admin/itstaf', { layout: 'adminlayout', posts })
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost: async (req, res) => {
        try {
            const { id } = req.params
            await itstaf.findByIdAndDelete({ _id: id });
            res.redirect('/admin/itstaf')
        } catch (err) {
            console.log(err);
        }
    },
    editpost: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await itstaf.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/itstaf')
        } catch (err) {
            console.log(err);
        }
    }

};
