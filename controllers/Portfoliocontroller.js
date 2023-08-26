
const portfolio = require('../models/portfoliomodel')
const cloudinary = require('../util/cloudinary')
module.exports = {
    renderportfolio: async (req, res) => {
        try {
            const posts = await portfolio.find()
            const portfolioclass="active"
            res.render('admin/Addportfolio', { layout: "adminlayout",posts,portfolioclass })
        } catch (err) {
            console.log(err);
        }
    },
    Addportfolio: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title } = req.body
            await portfolio.create({ title, image: imageurl })
            res.redirect('/admin/portfolio')
        } catch (err) {
            console.log(err);
        }
    },
    
};
