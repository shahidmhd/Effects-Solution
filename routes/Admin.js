const express=require('express')
const router = express.Router();
const Admincontroller=require('../controllers/Admincontroller')
const upload=require("../util/multer")

router.get("/",(req,res)=>{
    res.render('admin/dashboard',{layout:"adminlayout"})
});
router.get("/login",Admincontroller.GetLogin);
router.post("/login",Admincontroller.PostLogin);
router.get("/logout",Admincontroller.AdminLogout);
router.get('/form',Admincontroller.RenderForm)
router.post('/addpost',upload.single('image'),Admincontroller.Addpost)



module.exports=router