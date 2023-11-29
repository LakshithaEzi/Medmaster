var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Welcome To Our phamacist API")
});

require("./AuthRoutes")(router);
require("./PatientRoutes")(router);
require("./PharmacistRoutes")(router);
require('./DoctorRoutes')(router);

module.exports.router = router;