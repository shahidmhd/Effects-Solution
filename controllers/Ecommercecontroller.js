const Ecommerce = require('../models/EcommerceModel')
const cloudinary = require('../util/cloudinary')


module.exports = {
    AddEcommerce: async (req, res) => {
        try {
            const post = await Ecommerce.find()
            if (post) {
                await Ecommerce.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title, description } = req.body
            await Ecommerce.create({ title, description, image: imageurl })
            res.redirect('/admin/Ecommerce')
        } catch (err) {
            console.log(err);
        }
    },
    renderEcommerce: async (req, res) => {
        try {
            const posts = await Ecommerce.findOne()
            res.render('admin/Ecommerce', { layout: 'adminlayout', posts })
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost: async (req, res) => {
        try {
            const { id } = req.params
            await Ecommerce.findByIdAndDelete({ _id: id });
            res.redirect('/admin/Ecommerce')
        } catch (err) {
            console.log(err);
        }
    },
    editpost: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await Ecommerce.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/Ecommerce')
        } catch (err) {
            console.log(err);
        }
    },
    updateimageEcommerece:async(req,res)=>{
        try {
            const { id } = req.params;
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url;
        
            // Update only the image field
            await Ecommerce.findByIdAndUpdate(
                { _id: id },
                { image: imageurl }, // Update only the image field
                { new: true }
            );
            
            res.redirect('/admin/Digitalmarketing')
        } catch (err) {
            console.log(err);
        }
        
    }

};
