const product = require('../models/Productmodel')
const cloudinary = require('../util/cloudinary')
// const Post=require('../models/Postmodel')


module.exports = {
    Addproduct: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title } = req.body
            await product.create({ title, image: imageurl })
            res.redirect('/admin/addproduct')
        } catch (err) {
            console.log(err);
        }
    },
    renderproduct: async (req, res) => {
        try {
            const productclass="active"
            const posts = await product.find()
            res.render('admin/Products', { layout: "adminlayout", posts,productclass })
        } catch (err) {
            console.log(err);
        }
    },
    Deleteproduct: async (req, res) => {
        try {
            const { id } = req.params
            await product.findByIdAndDelete({ _id: id });
            res.redirect('/admin/addproduct')
        } catch (err) {
            console.log(err);
        }
    },
    editproduct: async (req, res) => {
        try {
            const { id } = req.params
            const { title } = req.body
            await product.findByIdAndUpdate(
                { _id: id },
                { title: title }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/addproduct')
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
            await product.findByIdAndUpdate(
                { _id: id },
                { image: imageurl }, // Update only the image field
                { new: true }
            );

            res.redirect('/admin/addproduct')
        } catch (err) {
            console.log(err);
        }

    }
};
