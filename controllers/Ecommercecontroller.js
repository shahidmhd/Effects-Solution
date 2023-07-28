const Ecommerce=require('../models/EcommerceModel')
const cloudinary = require('../util/cloudinary')
// const Post=require('../models/Postmodel')


module.exports = {
    AddEcommerce: async (req, res) => {
        try {
            const post = await Ecommerce.find()
            console.log(post);
            if (post) {
                await Ecommerce.deleteMany({});
            }

            // console.log(req.file.path,"hhhhhh");
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            console.log(imageurl);
            const { title, description } = req.body
            await  Ecommerce.create({ title, description, image: imageurl })
            res.redirect('/admin/Ecommerce')
        } catch (err) {
            console.log(err);
        }
    },
    renderEcommerce: async (req, res) => {
        try {
            const posts=await Ecommerce.findOne()
            res.render('admin/Ecommerce', { layout: 'adminlayout',posts })
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost:async(req,res)=>{
        try{
            const {id} = req.params
         await Ecommerce.findByIdAndDelete({ _id: id });
         res.redirect('/admin/Ecommerce')
        }catch(err){
            console.log(err);
        }
    },
    editpost:async(req,res)=>{
        try{
        const {id} = req.params
        const {title,description}=req.body
        await Ecommerce.findByIdAndUpdate(
            {_id:id},
            {title:title,description:description }, // No need to destructure the description parameter
            { new: true }
          );
          res.redirect('/admin/Ecommerce')
        }catch(err){
            console.log(err);
        }
    }
    
};
