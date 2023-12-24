var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

var schema = mongoose.schema;

var SALT = 10;

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name feild is required"],
    maxlength: 100,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already exists on our website"],
  },
  username: {
    tyep: String,
    required: [true, "Username is required"],
    unique: [true, "please choose another username"],
  },
  dob: {
    type: Date,
  },
  role: {
    type: String,
  },
  profileImage: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", function (next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(SALT, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);

        user.password = hash;

        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.methods.comparePassword = function (userPassword, callBack) {
  bcrypt.compare(userPassword, this.password, function (err, isMatch) {
    if (err) {
      return callBack(err);
    }

    callBack(null, isMatch);
  });
};

UserSchema.methods.generateToken = function (callBack) {
  var user = this;

  var token = jwt.sign(user._id.toHexString(), process.env.SECRET);

  callBack(null, token);
};

UserSchema.statics.findByToken = function (token, callBack) {
  jwt.verify(token, process.env.SECRET, function (err, decode) {
    User.findById(decode)
      .then((user) => {
        callBack(null, user);
      })
      .catch((err) => {
        callBack(null, err);
      });
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = { User };
