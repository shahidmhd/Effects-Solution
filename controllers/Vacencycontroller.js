

const Jobapplymodel = require('../models/Jobapplymodal');
const jobvacancy=require('../models/Jobvacancymodel')

module.exports = {
    rendervacancy: async (req, res) => {
        try {
            const posts = await Jobapplymodel.find()
            const vacancy=await jobvacancy.find()
            for (const post of posts) {
                const appliedAtDate = new Date(post.appliedAt);
                const formattedDate = appliedAtDate.toLocaleDateString("en-GB"); // Format: dd/mm/yyyy
                post.customAppliedAt = formattedDate;
            }
            res.render('admin/Addjobvacancy', { layout: "adminlayout", posts,vacancy })
        } catch (err) {
            console.log(err);
        }
    },
    Addvacancy: async (req, res) => {
        try {
            const { Position, description, startDate, endDate } = req.body;

            // Create a new job vacancy object using the JobVacancy model
            const newVacancy = new jobvacancy({
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
    },
    Deletevacancy: async (req, res) => {
        try {
            const { id } = req.params
            await Jobapplymodel.findByIdAndDelete({ _id: id });
            res.redirect('/admin/jobvacancy')

        } catch (err) {
            console.log(err);
        }
    },
    Deletejob:async(req,res)=>{
        try{
            const { id } = req.params
            await jobvacancy.findByIdAndDelete({ _id: id });
            res.redirect('/admin/jobvacancy')
        }catch(err){
            console.log(err);
        }
    },
    Editvacancy:async(req,res)=>{
        try{
            const { id } = req.params
            const { Position, description, startDate, endDate } = req.body;
            await jobvacancy.findByIdAndUpdate(
                { _id: id },
                {Position:Position,description:description,startDate:startDate,endDate:endDate}, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/jobvacancy')
        }catch(err){
            console.log(err);
        }
    }
};
