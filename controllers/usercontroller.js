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
            res.render('user/About')
        } catch (err) {
            console.log(err);
        }
    },
    userService: async (req, res) => {
        try {
            res.render('user/service')
        } catch (err) {
            console.log(err);
        }
    },
    userproduct: async (req, res) => {
        try {
            const products=await product.find()
            console.log(products);
            res.render('user/product',{products})
        } catch (err) {
            console.log(err);
        }
    },
    softwareDevelopment: async (req, res) => {
        try {
            const posts=await Post.findOne()
            res.render('user/SoftwareDevelopment',{posts})
        } catch (err) {
            console.log(err);
        }
    },
    webDevelopment: async (req, res) => {
        try {
            const posts=await Webdev.findOne()
            res.render('user/webDevelopment',{posts})
        } catch (err) {
            console.log(err);
        }
    },
    mobileDevelopment: async (req, res) => {
        try {
            const posts=await Mobdev.findOne()
            res.render('user/mobileDevelopment',{posts})
        } catch (err) {
            console.log(err);
        }
    },
    AppDevelopment: async (req, res) => {
        try {
            const posts=await Appdev.findOne()
            res.render('user/AppDevelopment',{posts})
        } catch (err) {
            console.log(err);
        }
    },
    Digitalmarketing: async (req, res) => {
        try {
            const posts=await Digital.findOne()
            res.render('user/Digitalmarketing',{posts})
        } catch (err) {
            console.log(err);
        }
    },
    BuisnessConsulting: async (req, res) => {
        try {
            const posts=await Buisness.findOne()
            res.render('user/BuisnessConsulting',{posts})
        } catch (err) {
            console.log(err);
        }
    },
    WebAnalitic: async (req, res) => {
        try {
            const posts=await WebAnalitic.findOne()
            res.render('user/WebAnalitics',{posts})
        } catch (err) {
            console.log(err);
        }
    },
     Ecommerce: async (req, res) => {
        try {
            const posts=await Ecommerce.findOne()
            res.render('user/Ecommerce',{posts})
        } catch (err) {
            console.log(err);
        }
    },
    EnterPrice: async (req, res) => {
        try {
            const posts=await Enterprice.findOne()
            res.render('user/EnterPriceDevelopment',{posts})
        } catch (err) {
            console.log(err);
        }
    },
    itstaf: async (req, res) => {
        try {
            const posts=await itstaf.findOne()
            res.render('user/itstaf',{posts})
        } catch (err) {
            console.log(err);
        }
    },
    branding: async (req, res) => {
        try {
            const posts=await Graphic.findOne()
            res.render('user/Branding&Graphics',{posts})
        } catch (err) {
            console.log(err);
        }
    }
}