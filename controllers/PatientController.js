const {User} = require("../Models/UserModel");
const {Medicine} = require ("../Models/MedicineModel");
const UserRole = require ("../enusm/UserRole")

exports.searchMedicines = async (req, res)  => {
    const searchString = res.body.term;

    if(!searchString) {

        return res.status(404).json({
            Success : false,
            message: "Search term is required"

        });
    }

    await ServiceWorker.find({
        $or: [
            {title: {$regex: searchString, $option: "i"}},
            {discription: {$regex: searchString, $option : "i"}}
        ]
    }).then((serviceFound) => {
        return res.status(200).json({
            Success : true,
            message : "Search results filterd ! ",
            data: serviceFound
        });
    }).catch((err) => {
        return res.status(422).json({
            Success : false,
            message : err.message,
            data : err
        });

    });


};

exports.viewPharmacistById = (req, res) => {
    User.findOne({ _id: req.params.id, role: UserRole.pharmacist}).then((pharmacist) => {
        console.log(pharmacist);

        if(!pharmacist) {
            return res.status(404).json ({
                Success :false,
                message : "Unable to find pharmacist"
            });
        }

        return res.status(200).json({
            Success : true,
            message : "pharmacist found!",
            data: pharmacist
        });
    }).catch((err) => {
        return res.status(422).json({
            Success: false,
            message : err.message,
            data:err
        });
    });

    };