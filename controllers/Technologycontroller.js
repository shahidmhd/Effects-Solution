const cloudinary = require('../util/cloudinary')
const Technology = require('../models/Technology')

module.exports = {
    
    renderTechnology: async (req, res) => {
        try {
            const posts = await Technology.findOne()
            const Technologyclass="active"
            res.render('admin/Technology', { layout: "adminlayout",Technologyclass,posts})
        } catch (err) {
            console.log(err);
        }
    },
    AddTechnology: async (req, res) => {
        try {
            const post = await Technology.find()
            if (post) {
                await Technology.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            console.log(imageurl);
            console.log(req.body,"jjj");
            const { title, description } = req.body
            await Technology.create({ title, description, image: imageurl })
            res.redirect('/admin/Technology')
        } catch (err) {
            console.log(err);
        }
    },
    DeleteTechnology: async (req, res) => {
        try {
            const { id } = req.params
            await Technology.findByIdAndDelete({ _id: id });
            res.redirect('/admin/Technology')
        } catch (err) {
            console.log(err);
        }
    },
    editTechnology: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await Technology.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/Technology')
        } catch (err) {
            console.log(err);
        }
    }
};
