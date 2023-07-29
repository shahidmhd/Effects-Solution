const Mobdev = require('../models/Mobdevmodel')
const cloudinary = require('../util/cloudinary')


module.exports = {
    AddMobdev: async (req, res) => {
        try {
            const post = await Mobdev.find()
            if (post) {
                await Mobdev.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title, description } = req.body
            await Mobdev.create({ title, description, image: imageurl })
            res.redirect('/admin/Mobdevelopment')
        } catch (err) {
            console.log(err);
        }
    },
    renderMobdev: async (req, res) => {
        try {
            const posts=await Mobdev.findOne()
            res.render('admin/Mobdev',{layout:"adminlayout",posts})
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost:async(req,res)=>{
        try{
            const {id} = req.params
         await Mobdev.findByIdAndDelete({ _id: id });
         res.redirect('/admin/Mobdevelopment')
        }catch(err){
            console.log(err);
        }
    },
    editpost:async(req,res)=>{
        try{
        const {id} = req.params
        const {title,description}=req.body
        await Mobdev.findByIdAndUpdate(
            {_id:id},
            {title:title,description:description }, // No need to destructure the description parameter
            { new: true }
          );
          res.redirect('/admin/Mobdevelopment')
        }catch(err){
            console.log(err);
        }
    }
};
