const Contact = require('../models/Contactsmodel')


module.exports = {

    renderContacts: async (req, res) => {
        try {
            const Datas = await Contact.find()
            console.log(Datas, "jjjjjjjjjjjjjjjjjjjjjjjj");
            res.render('admin/Contactspage',{ layout: 'adminlayout',Datas})
        } catch (err) {
            console.log(err);
        }
    },
    DeleteContact: async (req, res) => {
        try {
            const { id } = req.params
            await Contact.findByIdAndDelete({ _id: id });
            res.redirect('/admin/contacts')
        } catch (err) {
            console.log(err);
        }
    },


};
