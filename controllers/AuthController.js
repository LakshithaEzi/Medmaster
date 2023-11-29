const {User} = require("../Models/UserModel");

exports.registerUser = (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        return res.status(200).json({
            success: true,
            message: "successfully registed!"
        });
    }).catch((err) => {
        return res.status(422).json({
            success: false,
            message: err.message,
            data: err
        });
    });
};

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email }).then((user) => {
        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User is not found with entered email!"
            });
        } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
                if(!isMatch) {
                    return res.status(400).json({
                        success: false,
                        message: "Your password is incorrect. Please check & try again!"
                    });
                } else {
                    user.generateToken((err, token) => {
                        if(err) {
                            return res.status(400).json({
                                success: false,
                                message: err.message
                            });
                        } else {
                            return res.status(200).json({
                                success: true,
                                message: "Successfully Logged In!",
                                data: {
                                    "token": token
                                }
                            });
                        }
                    })
                }
            })
        }
    }).catch((err) => {
        return res.status(422).json({
            success: false,
            message: "Login attempt failed.",
            data: err
        });
    });
};

exports.getUserDetails = (req, res) => {
    res.json({
        success: true,
        message: "User Received!",
        data: req.user
    })
}