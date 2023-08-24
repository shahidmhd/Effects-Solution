const cloudinary = require('../util/cloudinary')
const webhost = require('../models/webhostmodel')
module.exports = {
    
    renderwebhosting: async (req, res) => {
        try {
            const posts = await webhost.findOne()
            const webhostingclass="active"
            res.render('admin/webhosting', { layout: "adminlayout",webhostingclass,posts})
        } catch (err) {
            console.log(err);
        }
    },
    Addwebhost: async (req, res) => {
        try {
            const post = await webhost.find()
            if (post) {
                await webhost.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            console.log(imageurl);
            console.log(req.body,"jjj");
            const { title, description } = req.body
            await webhost.create({ title, description, image: imageurl })
            res.redirect('/admin/webhosting')
        } catch (err) {
            console.log(err);
        }
    },
    DeleteWebhost: async (req, res) => {
        try {
            const { id } = req.params
            await webhost.findByIdAndDelete({ _id: id });
            res.redirect('/admin/webhosting')
        } catch (err) {
            console.log(err);
        }
    },
    editwebhost: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await webhost.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/webhosting')
        } catch (err) {
            console.log(err);
        }
    },
    updateimage:async(req,res)=>{
        try {
            const { id } = req.params;
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url;
        
            // Update only the image field
            await webhost.findByIdAndUpdate(
                { _id: id },
                { image: imageurl }, // Update only the image field
                { new: true }
            );
            
            res.redirect('/admin/webhosting');
        } catch (err) {
            console.log(err);
        }

    }
};
