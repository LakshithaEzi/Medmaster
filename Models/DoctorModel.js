var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User field is required. impot"]
    },
    DoctorLicenseNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Doctor = mongoose.model('Doctor', DoctorSchema);
module.exports = {Doctor}