const express = require("express");
const router = express.Router();
const {
    getallweather,
    getfashion
} = require("../controllers/controller");

router.get("/weather", getallweather);
router.get("/fashion", getfashion);


module.exports = router;