const Appdev = require('../models/Appdevmodel')
const cloudinary = require('../util/cloudinary')

module.exports = {
    AddAppdev: async (req, res) => {
        try {
            const post = await Appdev.find()
            if (post) {
                await Appdev.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title, description } = req.body
            await Appdev.create({ title, description, image: imageurl })
            res.redirect('/admin/Appdevelopment')
        } catch (err) {
            console.log(err);
        }
    },
    renderAppdev: async (req, res) => {
        try {
            const posts=await Appdev.findOne()
            res.render('admin/Appdev',{layout:"adminlayout",posts})
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost:async(req,res)=>{
        try{
            const {id} = req.params
         await Appdev.findByIdAndDelete({ _id: id });
         res.redirect('/admin/Appdevelopment')
        }catch(err){
            console.log(err);
        }
    },
    editpost:async(req,res)=>{
        try{
        const {id} = req.params
        const {title,description}=req.body
        await Appdev.findByIdAndUpdate(
            {_id:id},
            {title:title,description:description }, // No need to destructure the description parameter
            { new: true }
          );
          res.redirect('/admin/Appdevelopment')
        }catch(err){
            console.log(err);
        }
    }
};
