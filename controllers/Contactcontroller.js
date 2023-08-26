const Contact = require('../models/Contactsmodel')


module.exports = {

    renderContacts: async (req, res) => {
        try {
            const Datas = await Contact.find()
            const Contactclass="active"
            res.render('admin/Contactspage',{ layout: 'adminlayout',Contactclass,Datas})
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
