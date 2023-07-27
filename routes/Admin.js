const express=require('express')
const router = express.Router();
const Admincontroller=require('../controllers/Admincontroller')

router.get("/",(req,res)=>{
    res.render('admin/dashboard',{layout:"adminlayout"})
});
router.get("/login",Admincontroller.GetLogin);
router.post("/login",(req,res)=>{
    console.log(req.body,"gghhghjghg");
    res.render('admin/login',{layout:"adminlayout",adminlogin:true})
});



module.exports=router