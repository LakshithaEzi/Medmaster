module.exports = function(app) {
    const { Auth } = require('../middleware/auth');
    const { Patient } = require('../middleware/patient');

    const PatientController = require("../controllers/PatientController");
    const BuyingController = require("../controllers/BuyingController");

    app.post("/search_services", [Auth, Patient], PatientController.searchMedicines);
    app.get("/Pharmacist/:id", [Auth, Patient], PatientController.viewPharmacistById);
    app.post("/create_buing", [Auth, Patient], BuyingController.createpurchasing);
}