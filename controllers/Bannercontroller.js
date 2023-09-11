const Banner =require ('../models/Addbaanner')
const cloudinary = require('../util/cloudinary')

module.exports = {
   
    renderBanner: async (req, res) => {
        try {
            const posts = await Banner.find()
            res.render('admin/addbanner', { layout: 'adminlayout',posts})
        } catch (err) {
            console.log(err);
        }
    },
    AddBanner: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title} = req.body
            await Banner.create({ title, image: imageurl })
            res.redirect('/admin/bannerpage')
        } catch (err) {
            console.log(err);
        }
    },
    DeleteBanner: async (req, res) => {
        try {
            const { id } = req.params
            await Banner.findByIdAndDelete({ _id: id });
            res.redirect('/admin/bannerpage')
        } catch (err) {
            console.log(err);
        }
    },
    updateimage: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url;

            // Update only the image field
            await Banner.findByIdAndUpdate(
                { _id: id },
                { image: imageurl }, // Update only the image field
                { new: true }
            );

            res.redirect('/admin/bannerpage')
        } catch (err) {
            console.log(err);
        }

    },
    editbanner: async (req, res) => {
        try {
            const { id } = req.params
            const { title } = req.body
            await Banner.findByIdAndUpdate(
                { _id: id },
                { title: title }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/bannerpage')
        } catch (err) {
            console.log(err);
        }
    },
    
};
