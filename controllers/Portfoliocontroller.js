
const portfolio = require('../models/portfoliomodel')
const cloudinary = require('../util/cloudinary')
module.exports = {
    renderportfolio: async (req, res) => {
        try {
            const posts = await portfolio.find()
            const portfolioclass = "active"
            res.render('admin/Addportfolio', { layout: "adminlayout", posts, portfolioclass })
        } catch (err) {
            console.log(err);
        }
    },
    Addportfolio: async (req, res) => {
        try {
            const posts = await portfolio.find()
            if (posts.length >= 8) {
                res.redirect('/admin/portfolio')
            } else {
                const result = await cloudinary.uploader.upload(req.file.path);
                const imageurl = result.url
                const { title } = req.body
                await portfolio.create({ title, image: imageurl })
                res.redirect('/admin/portfolio')
            }
        } catch (err) {
            console.log(err);
        }
    },
    Deleteportfolio: async (req, res) => {
        try {
            const { id } = req.params
            await portfolio.findByIdAndDelete({ _id: id });
            res.redirect('/admin/portfolio')
        } catch (err) {
            console.log(err);
        }
    },
    editportfolio: async (req, res) => {
        try {
            const { id } = req.params
            const { title } = req.body
            await portfolio.findByIdAndUpdate(
                { _id: id },
                { title: title }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/portfolio')
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
            await portfolio.findByIdAndUpdate(
                { _id: id },
                { image: imageurl }, // Update only the image field
                { new: true }
            );

            res.redirect('/admin/portfolio')
        } catch (err) {
            console.log(err);
        }

    }
};
