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
const Contactcontroller=require('../controllers/Contactcontroller')
const Portfoliocontroller=  require('../controllers/Portfoliocontroller')
const Vacancycontroller=require('../controllers/Vacencycontroller')
const Bannercontroller=require('../controllers/Bannercontroller')
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
router.post('/editimagesoft/:id',adminauth.adminauth,upload.single('image'),Admincontroller.updateimage)

router.post('/addwebdev',adminauth.adminauth,upload.single('image'),Webdevcontroller.AddWebdev)
router.get('/webdevelopment',adminauth.adminauth,Webdevcontroller.renderWebdev)
router.get('/deleteWeb/:id',adminauth.adminauth,Webdevcontroller.DeletePost)
router.post('/editwebpost/:id',adminauth.adminauth,Webdevcontroller.editpost)
router.post('/editWebdevimage/:id',adminauth.adminauth,upload.single('image'),Webdevcontroller.updateimageWebdev)

router.get('/Mobdevelopment',adminauth.adminauth,Mobdevcontroller.renderMobdev)
router.post('/addMobdev',adminauth.adminauth,upload.single('image'),Mobdevcontroller.AddMobdev)
router.get('/deleteMob/:id',adminauth.adminauth,Mobdevcontroller.DeletePost)
router.post('/editMobpost/:id',adminauth.adminauth,Mobdevcontroller.editpost)
router.post('/editmobdevimage/:id',adminauth.adminauth,upload.single('image'),Mobdevcontroller.updateimagemobdev)

router.get('/Appdevelopment',adminauth.adminauth,Appdevcontroller.renderAppdev)
router.post('/addAppdev',adminauth.adminauth,upload.single('image'),Appdevcontroller.AddAppdev)
router.get('/deleteApp/:id',adminauth.adminauth,Appdevcontroller.DeletePost)
router.post('/editApppost/:id',adminauth.adminauth,Appdevcontroller.editpost)
router.post('/editAppdev/:id',adminauth.adminauth,upload.single('image'),Appdevcontroller.updateimageAppdev)

router.get('/Digitalmarketing',adminauth.adminauth,Digitalcontroller.renderDigitalmarketing)
router.post('/AddDigitalmarketing',adminauth.adminauth,upload.single('image'),Digitalcontroller.AddDigital)
router.get('/deleteDigital/:id',adminauth.adminauth,Digitalcontroller.DeletePost)
router.post('/editDigital/:id',adminauth.adminauth,Digitalcontroller.editpost)
router.post('/editDigitalmarketingimage/:id',adminauth.adminauth,upload.single('image'),Digitalcontroller.updateimageDigitalmarket)

router.get('/BuisnessConsulting',adminauth.adminauth,Buisnessconsultingcontroller.renderBuisness)
router.post('/addBuisnessconsulting',adminauth.adminauth,upload.single('image'),Buisnessconsultingcontroller.AddBuisness)
router.get('/deleteBuisness/:id',adminauth.adminauth,Buisnessconsultingcontroller.DeletePost)
router.post('/editBuisnesspost/:id',adminauth.adminauth,Buisnessconsultingcontroller.editpost)
router.post('/editBuisnessimage/:id',adminauth.adminauth,upload.single('image'),Buisnessconsultingcontroller.updateimageBuisness)



router.get('/WebAnalytics',adminauth.adminauth,webanalyticscontroller.renderWebAnalytics)
router.post('/addWebAnalytics',adminauth.adminauth,upload.single('image'),webanalyticscontroller.AddWebAnalytics)
router.get('/deleteWebAlalytics/:id',adminauth.adminauth,webanalyticscontroller.DeletePost)
router.post('/editWebAnalytics/:id',adminauth.adminauth,webanalyticscontroller.editpost)
router.post('/editWebAnalyticsimage/:id',adminauth.adminauth,upload.single('image'),webanalyticscontroller.updateimageWebAnalitic)

router.get('/Ecommerce',adminauth.adminauth,Ecommercecontroller.renderEcommerce)
router.post('/AddEcommerce',adminauth.adminauth,upload.single('image'),Ecommercecontroller.AddEcommerce)
router.get('/deleteEcommerce/:id',adminauth.adminauth,Ecommercecontroller.DeletePost)
router.post('/editEcommerce/:id',adminauth.adminauth,Ecommercecontroller.editpost)
router.post('/editEcommereceimage/:id',adminauth.adminauth,upload.single('image'),Ecommercecontroller.updateimageEcommerece)

router.get('/Enterprise',adminauth.adminauth,Enterpricecontroller.renderEnterprice)
router.post('/addEnterprise',adminauth.adminauth,upload.single('image'),Enterpricecontroller.AddEnterPrise)
router.get('/deleteEnterprise/:id',adminauth.adminauth,Enterpricecontroller.DeletePost)
router.post('/editEnterprise/:id',adminauth.adminauth,Enterpricecontroller.editpost)
router.post('/editEnterpriseimage/:id',adminauth.adminauth,upload.single('image'),Enterpricecontroller.updateEnterpricedevimage)


router.get('/itstaf',adminauth.adminauth,itstafcontroller.renderitstaf)
router.post('/additstaf',adminauth.adminauth,upload.single('image'),itstafcontroller.Additstaf)
router.get('/deleteitstaf/:id',adminauth.adminauth,itstafcontroller.DeletePost)
router.post('/edititstaf/:id',adminauth.adminauth,itstafcontroller.editpost)
router.post('/edititstafimage/:id',adminauth.adminauth,upload.single('image'),itstafcontroller.updateimageitstaf)

router.get('/GraphicDesigning',adminauth.adminauth,Graphiccontroller.renderGraphic)
router.post('/addGraphic',adminauth.adminauth,upload.single('image'),Graphiccontroller.AddGraphic)
router.get('/deleteGraphic/:id',adminauth.adminauth,Graphiccontroller.DeletePost)
router.post('/editGraphic/:id',adminauth.adminauth,Graphiccontroller.editpost)
router.post('/editgraphicimage/:id',adminauth.adminauth,upload.single('image'),Graphiccontroller.updateGraphicdesign)

router.get('/addproduct',adminauth.adminauth,Productcontroller.renderproduct)
router.post('/addproduct',adminauth.adminauth,upload.single('image'),Productcontroller.Addproduct)
router.get('/deleteproduct/:id',adminauth.adminauth,Productcontroller.Deleteproduct)
router.post('/editproduct/:id',adminauth.adminauth,Productcontroller.editproduct)
router.post('/editimageproduct/:id',adminauth.adminauth,upload.single('image'),Productcontroller.updateimage)


router.get('/webhosting',adminauth.adminauth,Webhostcontroller.renderwebhosting)
router.post('/addwebhost',adminauth.adminauth,upload.single('image'),Webhostcontroller.Addwebhost)
router.get('/deletewebhost/:id',adminauth.adminauth,Webhostcontroller.DeleteWebhost)
router.post('/editwebhost/:id',adminauth.adminauth,Webhostcontroller.editwebhost)
router.post('/editwebhostimage/:id',adminauth.adminauth,upload.single('image'),Webhostcontroller.updateimage)


router.get('/Technology',adminauth.adminauth,Technologycontroller.renderTechnology)
router.post('/addTechnology',adminauth.adminauth,upload.single('image'),Technologycontroller.AddTechnology)
router.get('/deleteTechnology/:id',adminauth.adminauth,Technologycontroller.DeleteTechnology)
router.post('/editTechnology/:id',adminauth.adminauth,Technologycontroller.editTechnology)
router.post('/editTechnologyimage/:id',adminauth.adminauth,upload.single('image'),Technologycontroller.updateimage)

router.get('/contacts',adminauth.adminauth,Contactcontroller.renderContacts)
router.get('/deletecontact/:id',adminauth.adminauth,Contactcontroller.DeleteContact)


router.get('/portfolio',adminauth.adminauth,Portfoliocontroller.renderportfolio)
router.post('/addportfolio',adminauth.adminauth,upload.single('image'),Portfoliocontroller.Addportfolio)
router.get('/deleteportfolio/:id',adminauth.adminauth,Portfoliocontroller.Deleteportfolio)
router.post('/editportfolio/:id',adminauth.adminauth,Portfoliocontroller.editportfolio)
router.post('/editimageportfolio/:id',adminauth.adminauth,upload.single('image'),Portfoliocontroller.updateimage)

router.get('/jobvacancy',adminauth.adminauth,Vacancycontroller.rendervacancy)
router.post('/addjobvacancy',adminauth.adminauth,Vacancycontroller.Addvacancy)
router.get('/deletejobvacancy/:id',adminauth.adminauth,Vacancycontroller.Deletevacancy)
router.get('/deletevacancy/:id',adminauth.adminauth,Vacancycontroller.Deletejob)
router.post('/editjobvacancy/:id',adminauth.adminauth,Vacancycontroller.Editvacancy)



router.get('/bannerpage',adminauth.adminauth,Bannercontroller.renderBanner)
router.post('/addBanner',adminauth.adminauth,upload.single('image'),Bannercontroller.AddBanner)
router.get('/deletebanner/:id',adminauth.adminauth,Bannercontroller.DeleteBanner)
router.post('/editimagebanner/:id',adminauth.adminauth,upload.single('image'),Bannercontroller.updateimage)
router.post('/editbannertitle/:id',adminauth.adminauth,Bannercontroller.editbanner)
module.exports=router