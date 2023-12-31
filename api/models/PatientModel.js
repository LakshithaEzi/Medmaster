var mongoose = require("mongoose");

var PatientSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User field is required."]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = {Patient}