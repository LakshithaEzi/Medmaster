const { User } = require("../models/UserModel");
const UserModel = require("../enusm/UserRole");

const Pharmacist = (req, res, next) => {
  let token = req.header("Access-token") || req.header("Authorization");

  if (token) {
    if (token.startsWith("Bearer")) {
      token = token.slice(10, token.length);
    }

    User.findByToken(token, (err, user) => {
      if (err) {
        throw err;
      }

      if (user.role != UserRole.PHARMACIST) {
        return res.status(403).json({
          status: false,
          message: "Patients don't have access to this route!",
        });
      }

      next();
    });
  }
};

module.exports = { Pharmacist };
