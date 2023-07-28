const Graphic=require('../models/GraphicDesignModel')
const cloudinary = require('../util/cloudinary')
// const Post=require('../models/Postmodel')


module.exports = {
    AddGraphic: async (req, res) => {
        try {
            const post = await Graphic.find()
            console.log(post);
            if (post) {
                await Graphic.deleteMany({});
            }

            // console.log(req.file.path,"hhhhhh");
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            console.log(imageurl);
            const { title, description } = req.body
            await  Graphic.create({ title, description, image: imageurl })
            res.redirect('/admin/GraphicDesigning')
        } catch (err) {
            console.log(err);
        }
    },
    renderGraphic: async (req, res) => {
        try {
            const posts=await Graphic.findOne()
            res.render('admin/GraphicDesign', { layout: 'adminlayout',posts })
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost:async(req,res)=>{
        try{
            const {id} = req.params
         await Graphic.findByIdAndDelete({ _id: id });
         res.redirect('/admin/GraphicDesigning')
        }catch(err){
            console.log(err);
        }
    },
    editpost:async(req,res)=>{
        try{
        const {id} = req.params
        const {title,description}=req.body
        await Graphic.findByIdAndUpdate(
            {_id:id},
            {title:title,description:description }, // No need to destructure the description parameter
            { new: true }
          );
          res.redirect('/admin/GraphicDesigning')
        }catch(err){
            console.log(err);
        }
    }
    
};
