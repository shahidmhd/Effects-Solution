const express=require('express')
const router = express.Router();
const Admincontroller=require('../controllers/Admincontroller')

router.get("/",(req,res)=>{
    res.render('admin/dashboard',{layout:"adminlayout"})
});
router.get("/login",Admincontroller.GetLogin);
router.post("/login",Admincontroller.PostLogin);
router.get("/logout",Admincontroller.AdminLogout);



module.exports=router