const express=require('express')
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get("/",usercontroller.userHome);
router.get("/about",usercontroller.userAbout);
router.get('/service',usercontroller.userService)
router.get('/products',usercontroller.userproduct)
router.get('/softwareDevelopment',usercontroller.softwareDevelopment)
router.get('/webDevelopment',usercontroller.webDevelopment)
router.get('/mobiledevelopment',usercontroller.mobileDevelopment)



module.exports=router