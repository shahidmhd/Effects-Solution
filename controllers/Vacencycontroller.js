

const Jobapplymodel = require('../models/Jobapplymodal')

module.exports = {
    rendervacancy: async (req, res) => {
        try {
            const posts = await Jobapplymodel.find()
            for (const post of posts) {
                const appliedAtDate = new Date(post.appliedAt);
                const formattedDate = appliedAtDate.toLocaleDateString("en-GB"); // Format: dd/mm/yyyy
                post.customAppliedAt = formattedDate;
            }
            res.render('admin/Addjobvacancy', { layout: "adminlayout", posts })
        } catch (err) {
            console.log(err);
        }
    },
    Addvacancy: async (req, res) => {
        try {
            const { Position, description, startDate, endDate } = req.body;

            // Create a new job vacancy object using the JobVacancy model
            const newVacancy = new Jobvecancy({
                Position,
                description,
                startDate,
                endDate
            });

            // Save the new vacancy to the database
            const savedVacancy = await newVacancy.save();
            res.redirect('/admin/jobvacancy')

        } catch (err) {
            console.log(err);
        }
    }
};
