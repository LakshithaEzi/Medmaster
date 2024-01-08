const { User } = require("../models/UserModel");
const { Medicine } = require("../models/MedicineModel");
const UserRole = require("../enusm/UserRole");

exports.createBooking = async (req, res) => {
  const stripe = require("stripe")(
    "sk_test_51OA4KuH2iRuYSNCfGzJsuxLQUeNxkKO3sNZPabiNNsC4pn3HPZepuIwVLGikvZSUKTPuze9y832QPuEyqnOH9Bit00cFvoqgJE"
  );

  const charge = await stripe.charges.create({
    amount: 339900,
    currency: "usd",
    source: "tok_mastercard",
    description: "Medicine Price",
  });

  if (charge) {
    return res.status(200).json({
      success: true,
      message: "New charge is created!",
    });
  } else {
    return res.status(400).json({
      success: true,
      message: "Unable to create charge!",
    });
  }
};
