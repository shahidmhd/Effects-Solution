module.exports = {
    GetLogin: async (req, res) => {
        try {
          
            res.render('admin/login',{layout:"adminlayout",adminlogin:true});
        } catch (err) {
            console.log(err);
        }
    },
    PostLogin: async (req, res) => {
        try {
          
           console.log(req.body,"ghhg");
        } catch (err) {
            console.log(err);
        }
    },
  
}