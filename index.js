// load env vars
require('dotenv').config();

const express = require('express');
const path = require('path');



// create server
const PORT = process.env.PORT || 3000;
const server = express();


server.use(express.json({ limit: '1mb'}));
server.use(express.static(path.join(__dirname, 'public')))


server.use('/weather_report', require('./routes/api/weather_report_router'));


server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
});
