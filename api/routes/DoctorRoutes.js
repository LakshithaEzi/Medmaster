module.exports = function(app){
    const {Auth} = require('../middleware/auth');
    const {Doctor} = require('../middleware/doctor');

    const DoctorController = require('../controllers/DoctorController');

    app.post("/create_medicine_tag", [Auth, Doctor], DoctorController.createMedicineTag);
    // app.get("/medicine_tags", [Auth, Doctor], DoctorController.getAllMedicineTags);
    app.post("/create_medicine", [Auth, Doctor], DoctorController.createMedicine);
    app.get("/medicines", [Auth, Doctor], DoctorController.getAllMedicines);
    app.get("/medicine/:id", [Auth, Doctor], DoctorController.getSingleMedicine);

}