const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    experiance: {
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    pdfUrl: {
        type: String,
        required: true
    },
    appliedAt: {
        type: Date,
        default: Date.now
    },
    customAppliedAt: {
        type: String,
        default: null,
    }
});

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

module.exports = JobApplication;
