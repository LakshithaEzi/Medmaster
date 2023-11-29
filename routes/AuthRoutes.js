module.exports = function(app) {
    const {Auth} = require("../middleware/auth");

    const AuthController = require("../middleware/auth");

    app.post("/register", AuthController.registerUser);
    app.post("/login" , AuthController.loginUser);
    app.get("/user", Auth, AuthController.getUserDtailes);
}