const Post=require('../models/Postmodel')

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
            res.render('user/product')
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
            res.render('user/webDevelopment')
        } catch (err) {
            console.log(err);
        }
    },
    mobileDevelopment: async (req, res) => {
        try {
            res.render('user/mobileDevelopment')
        } catch (err) {
            console.log(err);
        }
    },
    AppDevelopment: async (req, res) => {
        try {
            res.render('user/AppDevelopment')
        } catch (err) {
            console.log(err);
        }
    },
    Digitalmarketing: async (req, res) => {
        try {
            res.render('user/Digitalmarketing')
        } catch (err) {
            console.log(err);
        }
    },
    BuisnessConsulting: async (req, res) => {
        try {
            res.render('user/BuisnessConsulting')
        } catch (err) {
            console.log(err);
        }
    },
    WebAnalitic: async (req, res) => {
        try {
            res.render('user/WebAnalitics')
        } catch (err) {
            console.log(err);
        }
    },
     Ecommerce: async (req, res) => {
        try {
            res.render('user/Ecommerce')
        } catch (err) {
            console.log(err);
        }
    },
    EnterPrice: async (req, res) => {
        try {
            res.render('user/EnterPriceDevelopment')
        } catch (err) {
            console.log(err);
        }
    },
    itstaf: async (req, res) => {
        try {
            res.render('user/itstaf')
        } catch (err) {
            console.log(err);
        }
    },
    branding: async (req, res) => {
        try {
            res.render('user/Branding&Graphics')
        } catch (err) {
            console.log(err);
        }
    }
}