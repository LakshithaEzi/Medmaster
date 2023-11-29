const { default: mongoose } = require("mongoose");

var mongoose = require(mongoose);
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    image: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: [true, 'Price field is required']
    },
    medicineTag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicineTag',
        required: [true, "MedicineTag field is required."]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Medicine = mongoose.model('Medicine', MedicineSchema);
module.exports = {Medicine}