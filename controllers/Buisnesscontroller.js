const Buisness = require('../models/Buisnessmodel')
const cloudinary = require('../util/cloudinary')


module.exports = {
    AddBuisness: async (req, res) => {
        try {
            const post = await Buisness.find()
            console.log(post);
            if (post) {
                await Buisness.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            console.log(imageurl);
            const { title, description } = req.body
            await Buisness.create({ title, description, image: imageurl })
            res.redirect('/admin/BuisnessConsulting')
        } catch (err) {
            console.log(err);
        }
    },
    renderBuisness: async (req, res) => {
        try {
            const posts = await Buisness.findOne()
            res.render('admin/Buisnessconsulting', { layout: 'adminlayout', posts })
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost: async (req, res) => {
        try {
            const { id } = req.params
            await Buisness.findByIdAndDelete({ _id: id });
            res.redirect('/admin/BuisnessConsulting')
        } catch (err) {
            console.log(err);
        }
    },
    editpost: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await Buisness.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/BuisnessConsulting')
        } catch (err) {
            console.log(err);
        }
    }

};
