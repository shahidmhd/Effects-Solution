const express=require('express')
const router = express.Router();
const Admincontroller=require('../controllers/Admincontroller')
const Webdevcontroller=require('../controllers/Webdevcontroller')
const Mobdevcontroller=require('../controllers/Mobdevcontroller')
const Appdevcontroller=require('../controllers/Appdevcontroller')
const Digitalcontroller=require('../controllers/Digitalmarketingcontroller')
const Buisnessconsultingcontroller=require('../controllers/Buisnesscontroller')
const webanalyticscontroller=require('../controllers/WebAnalitic')
const Ecommercecontroller=require('../controllers/Ecommercecontroller')
const Enterpricecontroller=require('../controllers/Enterpricecontroller')
const itstafcontroller=require('../controllers/itstafcontroller')
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

router.get('/Appdevelopment',Appdevcontroller.renderAppdev)
router.post('/addAppdev',upload.single('image'),Appdevcontroller.AddAppdev)
router.get('/deleteApp/:id',Appdevcontroller.DeletePost)
router.post('/editApppost/:id',Appdevcontroller.editpost)

router.get('/Digitalmarketing',Digitalcontroller.renderDigitalmarketing)
router.post('/AddDigitalmarketing',upload.single('image'),Digitalcontroller.AddDigital)
router.get('/deleteDigital/:id',Digitalcontroller.DeletePost)
router.post('/editDigital/:id',Digitalcontroller.editpost)

router.get('/BuisnessConsulting',Buisnessconsultingcontroller.renderBuisness)
router.post('/addBuisnessconsulting',upload.single('image'),Buisnessconsultingcontroller.AddBuisness)
router.get('/deleteBuisness/:id',Buisnessconsultingcontroller.DeletePost)
router.post('/editBuisnesspost/:id',Buisnessconsultingcontroller.editpost)



router.get('/WebAnalytics',webanalyticscontroller.renderWebAnalytics)
router.post('/addWebAnalytics',upload.single('image'),webanalyticscontroller.AddWebAnalytics)
router.get('/deleteWebAlalytics/:id',webanalyticscontroller.DeletePost)
router.post('/editWebAnalytics/:id',webanalyticscontroller.editpost)

router.get('/Ecommerce',Ecommercecontroller.renderEcommerce)
router.post('/AddEcommerce',upload.single('image'),Ecommercecontroller.AddEcommerce)
router.get('/deleteEcommerce/:id',Ecommercecontroller.DeletePost)
router.post('/editEcommerce/:id',Ecommercecontroller.editpost)

router.get('/Enterprise',Enterpricecontroller.renderEnterprice)
router.post('/addEnterprise',upload.single('image'),Enterpricecontroller.AddEnterPrise)
router.get('/deleteEnterprise/:id',Enterpricecontroller.DeletePost)
router.post('/editEnterprise/:id',Enterpricecontroller.editpost)


router.get('/itstaf',itstafcontroller.renderitstaf)
router.post('/additstaf',upload.single('image'),itstafcontroller.Additstaf)
router.get('/deleteitstaf/:id',itstafcontroller.DeletePost)
router.post('/edititstaf/:id',itstafcontroller.editpost)


module.exports=router