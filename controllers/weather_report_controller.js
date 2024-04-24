const WeatherAPI = require("../server_modules/api/weather_api");


let getWeatherDataPackage = async (location) => {
    let weather_api = new WeatherAPI();
    data = await weather_api.get_current_weather(location);
    return data;
};


const getWeatherReport = async (req, res) => {

    // console.log("gogo")
    // let location = getLocation(req);
    // setLocationsCookie(res, location);

    let location = req.params.location;

    let data = await getWeatherDataPackage(location);
    let clean_data = {
        temp: data.current.temp_c,
        wind_speed: data.current.wind_kph,
        humidity: data.current.humidity,
        radiation_temp: data.current.temp_c
    };
    res.send({ "data": clean_data });
};

module.exports = {getWeatherReport, getWeatherDataPackage};