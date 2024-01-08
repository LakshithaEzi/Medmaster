module.exports = function(app){
    const {Auth} = require('../middleware/auth');
    const {Pharmacist} = require('../middleware/pharmacist');

    const PharmacistController = require('../controllers/PharmacistController');

    app.post("/create_medicine_tag", [Auth, Pharmacist], PharmacistController.createMedicineTag);
    // app.get("/medicine_tags", [Auth, Pharmacist], PharmacistController.getAllMedicineTags);
    app.post("/create_medicine", [Auth, Pharmacist], PharmacistController.createMedicine);
    app.get("/medicines", [Auth, Pharmacist], PharmacistController.getAllMedicines);
    app.get("/medicine/:id", [Auth, Pharmacist], PharmacistController.getSingleMedicine);

}