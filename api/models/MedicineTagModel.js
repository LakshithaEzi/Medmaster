var mongoose = require("mongoose");

var MedicineTagSchema = new mongoose.Schema({

    tag: {
        type:String,
        require : [true , "tag field require"]

    },
    pharmacist: {
        type: String,
        require :[true, "pharmacist feild require"]
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
});

const MedicineTag = mongoose.model("MedicineTag", MedicineTagSchema);
module.exports={MedicineTag}