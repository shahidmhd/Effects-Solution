const express=require('express')
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');
const upload=require("../util/multer")

router.get("/",usercontroller.userHome);
router.get("/about",usercontroller.userAbout);
router.get('/service',usercontroller.userService)
router.get('/products',usercontroller.userproduct)
router.get('/softwareDevelopment',usercontroller.softwareDevelopment)
router.get('/webDevelopment',usercontroller.webDevelopment)
router.get('/mobiledevelopment',usercontroller.mobileDevelopment)
router.get('/Appdevelopment',usercontroller.AppDevelopment)
router.get('/Digitalmarketing',usercontroller.Digitalmarketing)
router.get('/BuisnessConsulting',usercontroller.BuisnessConsulting)
router.get('/WebAnalitics',usercontroller.WebAnalitic)
router.get('/Ecommerce',usercontroller.Ecommerce)
router.get('/EnterPrice',usercontroller.EnterPrice)
router.get('/itstaf',usercontroller.itstaf)
router.get('/branding',usercontroller.branding)
router.get('/contact',usercontroller.Contact)
router.get('/webhosting',usercontroller.Webhosting)
router.get('/Technology',usercontroller.Technology)
router.get('/Portfolio',usercontroller.Portfolio)
router.post('/contactsubmit',usercontroller.Contactform)
router.get('/Careers',usercontroller.rendercareer)
router.post('/jobapply/:id',upload.single('pdf'),usercontroller.applyedjobs)


module.exports=router