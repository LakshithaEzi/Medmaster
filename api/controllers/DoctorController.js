const { User } = require("../models/UserModel");
const { Medicine } = require("../models/MedicineModel");
const { MedicineTag } = require("../models/MedicineTagModel");

exports.createMedicineTag = async (req, res) => {
  const MedicineTag = new MedicineTag(req.body);

  MedicineTag.doctor = req.user._id;

  await MedicineTag.save()
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "Mew medicine has listed",
      });
    })
    .catch((err) => {
      return res.status(422).json({
        success: false,
        message: err.message,
        data: err,
      });
    });
};
exports.createMedicine = async (req, res) => {
  const MedicineTagId = req.body.MedicineTag;

  if (!MedicineTagId) {
    return res.status(422).json({
      success: false,
      message: "Medicine tag not found",
    });
  }

  await MedicineTag.findById(MedicineTagId)
    .then(async (MedicineTag) => {
      if (!MedicineTag) {
        return res.status(422).json({
          success: false,
          message: "Invalid Medicine tag!",
        });
      }

      const newMedicine = new Medicine(req.body);

      newMedicine.beautician = req.user._id;

      await newMedicine
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            message: "New Medicine is created!",
          });
        })
        .catch((err) => {
          return res.status(422).json({
            success: false,
            message: err.message,
            data: err,
          });
        });
    })
    .catch((err) => {
      return res.status(422).json({
        success: false,
        message: err.message,
        data: err,
      });
    });
};

exports.getAllMedicines = async (req, res) => {
  await Medicine.find({ doctor: req.user._id })
    .then((Medicines) => {
      return res.status(200).json({
        success: true,
        message: "Received all Medicines!",
        data: Medicines,
      });
    })
    .catch((err) => {
      return res.status(422).json({
        success: false,
        message: err.message,
        data: err,
      });
    });
};

exports.getSingleMedicine = async (req, res) => {
  await Medicine.findOne({ _id: req.params.id, pharmacist: req.user._id })
    .then((singleMedicine) => {
      return res.status(200).json({
        success: true,
        message: "Received single Medicine!",
        data: singleMedicine,
      });
    })
    .catch((err) => {
      return res.status(422).json({
        success: false,
        message: err.message,
        data: err,
      });
    });
};
