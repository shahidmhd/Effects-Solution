const admin = require('../models/Adminmodel');
const bcrypt =require('bcrypt')
const cloudinary=require('../util/cloudinary')
const Post=require('../models/Postmodel')



module.exports = {
    GetLogin: async (req, res) => {
        try {
            if(req.session.adminloggedIn){
                res.redirect('/admin')
            }else{
                res.render('admin/login', { layout: "adminlayout", adminlogin: true });
            }
            
           
        } catch (err) {
            console.log(err);
            // Handle the error appropriately, such as sending an error response to the client
        }
    },
    PostLogin: async (req, res) => {
        try {
            console.log(req.body);
            const { email, password } = req.body;
            console.log(email, password);

            const loginadmin = await admin.findOne({ email });
          if(!loginadmin){
            res.render('admin/login', { layout: "adminlayout", adminlogin: true });
          }
          const passwordCorrect=await bcrypt.compare(password,loginadmin.password);
          console.log(passwordCorrect);
          if(!passwordCorrect){
            res.render('admin/login', { layout: "adminlayout", adminlogin: true});
          }else{
            req.session.admin = email;
            req.session.adminloggedIn = true;
            res.redirect('/admin')
         }

        
       
    
        } catch (err) {
            console.log(err);
            // Handle the error appropriately, such as sending an error response to the client
        }
    },
    AdminLogout:async(req,res)=>{
        try{
            req.session.adminloggedIn =false;
            res.redirect('/admin/login')
         }catch(err){
             console.log(err);
         }

    },
    RenderForm:async(req,res)=>{
        try{
        res.render('admin/addform',{layout:"adminlayout"})
        }catch(err){
            console.log(err);
        }
    },
    Addpost:async(req,res)=>{
        try{
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl=result.url
           const {title,description}=req.body
           await Post.create({title,description,image:imageurl})
           res.redirect('/admin/form')
        }catch(err){
            console.log(err);
        }
    }
    // You may add more methods for other admin-related actions
};
