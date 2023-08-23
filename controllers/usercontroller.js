const Post=require('../models/Postmodel')
const Webdev = require('../models/Weddevmodel')
const Mobdev = require('../models/Mobdevmodel')
const Appdev = require('../models/Appdevmodel')
const Digital = require('../models/Digitalmarketing')
const Buisness=require('../models/Buisnessmodel')
const WebAnalitic=require('../models/WebAnalitic')
const Ecommerce=require('../models/EcommerceModel')
const Enterprice=require('../models/Enterprice')
const itstaf=require('../models/itstafmodel')
const Graphic=require('../models/GraphicDesignModel')
const product = require('../models/Productmodel')
const Webhost = require('../models/webhostmodel')
const Technology = require('../models/Technology')

module.exports = {
    userHome: async (req, res) => {
        try {
            const activeclass = "current-menu-item";
            res.render('user/Home', { activeclass });
        } catch (err) {
            console.log(err);
        }
    },
    userAbout: async (req, res) => {
        try {
            const aboutclass = "current-menu-item";
            res.render('user/About',{aboutclass})
        } catch (err) {
            console.log(err);
        }
    },
    userService: async (req, res) => {
        try {
            const serviceclass = "current-menu-item";
            res.render('user/service',{serviceclass})
        } catch (err) {
            console.log(err);
        }
    },
    userproduct: async (req, res) => {
        try {
            const productclass = "current-menu-item";
            const products=await product.find()
            console.log(products);
            res.render('user/product',{products,productclass})
        } catch (err) {
            console.log(err);
        }
    },
    softwareDevelopment: async (req, res) => {
        try {
            const classes = "current-menu-item";
            const posts=await Post.findOne()
            res.render('user/SoftwareDevelopment',{posts,classes})
        } catch (err) {
            console.log(err);
        }
    },
    webDevelopment: async (req, res) => {
        try {
            const webclass = "current-menu-item";
            const posts=await Webdev.findOne()
            res.render('user/webDevelopment',{posts,webclass})
        } catch (err) {
            console.log(err);
        }
    },
    mobileDevelopment: async (req, res) => {
        try {
            const mobclass = "current-menu-item";
            const posts=await Mobdev.findOne()
            res.render('user/mobileDevelopment',{posts,mobclass})
        } catch (err) {
            console.log(err);
        }
    },
    AppDevelopment: async (req, res) => {
        try {
            const Appclass = "current-menu-item";
            const posts=await Appdev.findOne()
            res.render('user/AppDevelopment',{posts,Appclass})
        } catch (err) {
            console.log(err);
        }
    },
    Digitalmarketing: async (req, res) => {
        try {
            const Digclass = "current-menu-item";
            const posts=await Digital.findOne()
            res.render('user/Digitalmarketing',{posts,Digclass})
        } catch (err) {
            console.log(err);
        }
    },
    BuisnessConsulting: async (req, res) => {
        try {
            const Busclass = "current-menu-item";
            const posts=await Buisness.findOne()
            res.render('user/BuisnessConsulting',{posts,Busclass})
        } catch (err) {
            console.log(err);
        }
    },
    WebAnalitic: async (req, res) => {
        try {
            const Webclass = "current-menu-item";
            const posts=await WebAnalitic.findOne()
            res.render('user/WebAnalitics',{posts,Webclass})
        } catch (err) {
            console.log(err);
        }
    },
     Ecommerce: async (req, res) => {
        try {
            const Ecoclass = "current-menu-item";
            const posts=await Ecommerce.findOne()
            res.render('user/Ecommerce',{posts,Ecoclass})
        } catch (err) {
            console.log(err);
        }
    },
    EnterPrice: async (req, res) => {
        try {
            const Entclass = "current-menu-item";
            const posts=await Enterprice.findOne()
            res.render('user/EnterPriceDevelopment',{posts,Entclass})
        } catch (err) {
            console.log(err);
        }
    },
    itstaf: async (req, res) => {
        try {
            const Itsclass = "current-menu-item";
            const posts=await itstaf.findOne()
            res.render('user/itstaf',{posts,Itsclass})
        } catch (err) {
            console.log(err);
        }
    },
    branding: async (req, res) => {
        try {
            const Braclass = "current-menu-item";
            const posts=await Graphic.findOne()
            res.render('user/Branding&Graphics',{posts,Braclass})
        } catch (err) {
            console.log(err);
        }
    },
    Contact: async (req, res) => {
        try {
            const contactclass = "current-menu-item";
            res.render('user/Contact',{contactclass})
        } catch (err) {
            console.log(err);
        }
    },
    Webhosting: async (req, res) => {
        try {
            const webhostclass = "current-menu-item";
            const posts=await Webhost.findOne()
            res.render('user/webhosting',{posts,webhostclass})
        } catch (err) {
            console.log(err);
        }
    },
    Technology:async(req,res)=>{
        try {
            const Technologyclass = "current-menu-item";
            const posts=await Technology.findOne()
            res.render('user/technology',{Technologyclass,posts})
        } catch (err) {
            console.log(err);
        }
    }
}