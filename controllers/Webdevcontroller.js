const Webdev = require('../models/Weddevmodel')
const bcrypt = require('bcrypt')
const cloudinary = require('../util/cloudinary')
// const Post=require('../models/Postmodel')


module.exports = {
    AddWebdev: async (req, res) => {
        try {
            const post = await Webdev.find()
            if (post) {
                await Webdev.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title, description } = req.body
            await Webdev.create({ title, description, image: imageurl })
            res.redirect('/admin/webdevelopment')
        } catch (err) {
            console.log(err);
        }
    },
    renderWebdev: async (req, res) => {
        try {
            const posts=await Webdev.findOne()
            res.render('admin/Addwebdevelopment', { layout: 'adminlayout',posts })
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost:async(req,res)=>{
        try{
            const {id} = req.params
         await Webdev.findByIdAndDelete({ _id: id });
         res.redirect('/admin/webdevelopment')
        }catch(err){
            console.log(err);
        }
    },
    editpost:async(req,res)=>{
        try{
        const {id} = req.params
        const {title,description}=req.body
        await Webdev.findByIdAndUpdate(
            {_id:id},
            {title:title,description:description }, // No need to destructure the description parameter
            { new: true }
          );
          res.redirect('/admin/webdevelopment')
        }catch(err){
            console.log(err);
        }
    }
};
