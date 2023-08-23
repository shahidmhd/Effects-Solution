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
const Graphiccontroller=require('../controllers/GraphicDesigncontroller')
const Productcontroller=require('../controllers/Productcontroller')
const Webhostcontroller=require('../controllers/Webhostingcontroller')
const Technologycontroller=require('../controllers/Technologycontroller')
const upload=require("../util/multer")
const adminauth=require('../Middlewears/Adminauth')

router.get("/",adminauth.adminauth,Admincontroller.renderDashboard);
router.get("/login",Admincontroller.GetLogin);
router.post("/login",Admincontroller.PostLogin);
router.get("/logout",adminauth.adminauth,Admincontroller.AdminLogout);

router.get('/form',adminauth.adminauth,Admincontroller.RenderForm)
router.post('/addpost',adminauth.adminauth,upload.single('image'),Admincontroller.Addpost)
router.get('/deletepost/:id',adminauth.adminauth,Admincontroller.DeletePost)
router.post('/editpost/:id',adminauth.adminauth,Admincontroller.editpost)

router.post('/addwebdev',adminauth.adminauth,upload.single('image'),Webdevcontroller.AddWebdev)
router.get('/webdevelopment',adminauth.adminauth,Webdevcontroller.renderWebdev)
router.get('/deleteWeb/:id',adminauth.adminauth,Webdevcontroller.DeletePost)
router.post('/editwebpost/:id',adminauth.adminauth,Webdevcontroller.editpost)

router.get('/Mobdevelopment',adminauth.adminauth,Mobdevcontroller.renderMobdev)
router.post('/addMobdev',adminauth.adminauth,upload.single('image'),Mobdevcontroller.AddMobdev)
router.get('/deleteMob/:id',adminauth.adminauth,Mobdevcontroller.DeletePost)
router.post('/editMobpost/:id',adminauth.adminauth,Mobdevcontroller.editpost)

router.get('/Appdevelopment',adminauth.adminauth,Appdevcontroller.renderAppdev)
router.post('/addAppdev',adminauth.adminauth,upload.single('image'),Appdevcontroller.AddAppdev)
router.get('/deleteApp/:id',adminauth.adminauth,Appdevcontroller.DeletePost)
router.post('/editApppost/:id',adminauth.adminauth,Appdevcontroller.editpost)

router.get('/Digitalmarketing',adminauth.adminauth,Digitalcontroller.renderDigitalmarketing)
router.post('/AddDigitalmarketing',adminauth.adminauth,upload.single('image'),Digitalcontroller.AddDigital)
router.get('/deleteDigital/:id',adminauth.adminauth,Digitalcontroller.DeletePost)
router.post('/editDigital/:id',adminauth.adminauth,Digitalcontroller.editpost)

router.get('/BuisnessConsulting',adminauth.adminauth,Buisnessconsultingcontroller.renderBuisness)
router.post('/addBuisnessconsulting',adminauth.adminauth,upload.single('image'),Buisnessconsultingcontroller.AddBuisness)
router.get('/deleteBuisness/:id',adminauth.adminauth,Buisnessconsultingcontroller.DeletePost)
router.post('/editBuisnesspost/:id',adminauth.adminauth,Buisnessconsultingcontroller.editpost)



router.get('/WebAnalytics',adminauth.adminauth,webanalyticscontroller.renderWebAnalytics)
router.post('/addWebAnalytics',adminauth.adminauth,upload.single('image'),webanalyticscontroller.AddWebAnalytics)
router.get('/deleteWebAlalytics/:id',adminauth.adminauth,webanalyticscontroller.DeletePost)
router.post('/editWebAnalytics/:id',adminauth.adminauth,webanalyticscontroller.editpost)

router.get('/Ecommerce',adminauth.adminauth,Ecommercecontroller.renderEcommerce)
router.post('/AddEcommerce',adminauth.adminauth,upload.single('image'),Ecommercecontroller.AddEcommerce)
router.get('/deleteEcommerce/:id',adminauth.adminauth,Ecommercecontroller.DeletePost)
router.post('/editEcommerce/:id',adminauth.adminauth,Ecommercecontroller.editpost)

router.get('/Enterprise',adminauth.adminauth,Enterpricecontroller.renderEnterprice)
router.post('/addEnterprise',adminauth.adminauth,upload.single('image'),Enterpricecontroller.AddEnterPrise)
router.get('/deleteEnterprise/:id',adminauth.adminauth,Enterpricecontroller.DeletePost)
router.post('/editEnterprise/:id',adminauth.adminauth,Enterpricecontroller.editpost)


router.get('/itstaf',adminauth.adminauth,itstafcontroller.renderitstaf)
router.post('/additstaf',adminauth.adminauth,upload.single('image'),itstafcontroller.Additstaf)
router.get('/deleteitstaf/:id',adminauth.adminauth,itstafcontroller.DeletePost)
router.post('/edititstaf/:id',adminauth.adminauth,itstafcontroller.editpost)

router.get('/GraphicDesigning',adminauth.adminauth,Graphiccontroller.renderGraphic)
router.post('/addGraphic',adminauth.adminauth,upload.single('image'),Graphiccontroller.AddGraphic)
router.get('/deleteGraphic/:id',adminauth.adminauth,Graphiccontroller.DeletePost)
router.post('/editGraphic/:id',adminauth.adminauth,Graphiccontroller.editpost)

router.get('/addproduct',adminauth.adminauth,Productcontroller.renderproduct)
router.post('/addproduct',adminauth.adminauth,upload.single('image'),Productcontroller.Addproduct)
router.get('/deleteproduct/:id',adminauth.adminauth,Productcontroller.Deleteproduct)
router.post('/editproduct/:id',adminauth.adminauth,Productcontroller.editproduct)


router.get('/webhosting',adminauth.adminauth,Webhostcontroller.renderwebhosting)
router.post('/addwebhost',adminauth.adminauth,upload.single('image'),Webhostcontroller.Addwebhost)
router.get('/deletewebhost/:id',adminauth.adminauth,Webhostcontroller.DeleteWebhost)
router.post('/editwebhost/:id',adminauth.adminauth,Webhostcontroller.editwebhost)


router.get('/Technology',adminauth.adminauth,Technologycontroller.renderTechnology)
router.post('/addTechnology',adminauth.adminauth,upload.single('image'),Technologycontroller.AddTechnology)
router.get('/deleteTechnology/:id',adminauth.adminauth,Technologycontroller.DeleteTechnology)
router.post('/editTechnology/:id',adminauth.adminauth,Technologycontroller.editTechnology)




module.exports=router