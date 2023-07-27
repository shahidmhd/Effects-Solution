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
            res.render('user/SoftwareDevelopment')
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
    }
}