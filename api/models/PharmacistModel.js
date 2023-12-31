var mongoose = require("mongoose");

var PharmacistSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User field is required."]
    },
    PharmacyLicenseNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Pharmacist = mongoose.model('Pharmacist', PharmacistSchema);
module.exports = {Pharmacist}