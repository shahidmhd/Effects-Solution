const express=require('express')
const router = express.Router();
const Admincontroller=require('../controllers/Admincontroller')
const Webdevcontroller=require('../controllers/Webdevcontroller')
const Mobdevcontroller=require('../controllers/Mobdevcontroller')
const upload=require("../util/multer")

router.get("/",(req,res)=>{
    res.render('admin/dashboard',{layout:"adminlayout"})
});
router.get("/login",Admincontroller.GetLogin);
router.post("/login",Admincontroller.PostLogin);
router.get("/logout",Admincontroller.AdminLogout);
router.get('/form',Admincontroller.RenderForm)
router.post('/addpost',upload.single('image'),Admincontroller.Addpost)
router.get('/deletepost/:id',Admincontroller.DeletePost)
router.post('/editpost/:id',Admincontroller.editpost)
router.post('/addwebdev',upload.single('image'),Webdevcontroller.AddWebdev)
router.get('/webdevelopment',Webdevcontroller.renderWebdev)
router.get('/deleteWeb/:id',Webdevcontroller.DeletePost)
router.post('/editwebpost/:id',Webdevcontroller.editpost)
router.get('/Mobdevelopment',Mobdevcontroller.renderMobdev)
router.post('/addMobdev',upload.single('image'),Mobdevcontroller.AddMobdev)
router.get('/deleteMob/:id',Mobdevcontroller.DeletePost)
router.post('/editMobpost/:id',Mobdevcontroller.editpost)
module.exports=router