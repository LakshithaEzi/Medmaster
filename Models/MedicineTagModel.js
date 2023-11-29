var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MedicineTagSchema = new Schema({

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

const MedicineTag = mongoose.model("ServiceTag", ServiceTagSchema);
module.exports={MedicineTag}