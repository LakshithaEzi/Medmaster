const app = require("express") ();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());

var port = process.env.PORT || 6000;

mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Connected To Database");
})

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

var v1 = require("./api/routes");

app.use("/api/v1", v1.router);

app.use(function(req, res) {
    
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
    console.log("pharmacist API started on port " + port);
})