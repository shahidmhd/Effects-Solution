const mongoose = require('mongoose');

const jobVacancySchema = new mongoose.Schema({
    Position: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    }
});

const JobVacancy = mongoose.model('JobVacancy', jobVacancySchema);

module.exports = JobVacancy;
