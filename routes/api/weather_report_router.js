const express = require('express');
const router = express.Router();

const {getWeatherReport} = require('../../controllers/weather_report_controller')

router.route('/:location')
    .get(getWeatherReport)

    
module.exports = router;