const admin = require('../models/Adminmodel');
const cloudinary = require('../util/cloudinary')
const Post = require('../models/Postmodel')


module.exports = {
    GetLogin: async (req, res) => {
        try {
            if (req.session.adminloggedIn) {
                res.redirect('/admin')
            } else {
                res.render('admin/login', { layout: "adminlayout", adminlogin: true,adminlogErr:req.session.admlogErr });
                req.session.admlogErr=false;
            }
        } catch (err) {
            console.log(err);
            // Handle the error appropriately, such as sending an error response to the client
        }
    },
    PostLogin: async (req, res) => {
        try {
            const { email, password } = req.body;

            const loginadmin = await admin.findOne({ email });
            if (!loginadmin) {
                // res.render('admin/login', { layout: "adminlayout", adminlogin: true });
                req.session.admlogErr = "email does not exist....";
                res.redirect('/admin/login')
            }
            let passwordCorrect
            if(password===loginadmin.password){
                passwordCorrect=true
            }else{
                passwordCorrect=false
            }
            // const passwordCorrect = await bcrypt.compare(password, loginadmin.password);
            if (!passwordCorrect) {
                // res.render('admin/login', { layout: "adminlayout", adminlogin: true });
                req.session.admlogErr = "incorrect password....";
                res.redirect('/admin/login')
            } else {
                req.session.admin = email;
                req.session.adminloggedIn = true;
                req.session.admlogErr=false;
                res.redirect('/admin')
            }




        } catch (err) {
            console.log(err);
            // Handle the error appropriately, such as sending an error response to the client
        }
    },
    AdminLogout: async (req, res) => {
        try {
            req.session.adminloggedIn = false;
            res.redirect('/admin/login')
        } catch (err) {
            console.log(err);
        }

    },
    RenderForm: async (req, res) => {
        try {
            const formclass="active"
            const posts = await Post.findOne()
            res.render('admin/addform', { layout: "adminlayout", posts,formclass })
        } catch (err) {
            console.log(err);
        }
    },
    Addpost: async (req, res) => {
        try {
            const post = await Post.find()
            if (post) {
                await Post.deleteMany({});
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { title, description } = req.body
            await Post.create({ title, description, image: imageurl })
            res.redirect('/admin/form')
        } catch (err) {
            console.log(err);
        }
    },
    DeletePost: async (req, res) => {
        try {
            const { id } = req.params
            await Post.findByIdAndDelete({ _id: id });
            res.redirect('/admin/form')
        } catch (err) {
            console.log(err);
        }
    },
    editpost: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await Post.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/form')
        } catch (err) {
            console.log(err);
        }
    },
    renderDashboard:async(req,res)=>{
        try{
            console.log(req.session.adminlogErr);
            const Dashclass="active"
            res.render('admin/dashboard',{layout:"adminlayout",Dashclass})
        }catch(err){
            console.log(err);
        }
    },
    updateimage:async(req,res)=>{
        try {
            const { id } = req.params;
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url;
        
            // Update only the image field
            await Post.findByIdAndUpdate(
                { _id: id },
                { image: imageurl }, // Update only the image field
                { new: true }
            );
            
            res.redirect('/admin/form');
        } catch (err) {
            console.log(err);
        }
        
    }
    // You may add more methods for other admin-related actions
};
