
function set_weather_report(location) {
    console.log(`Input lacation ${location}`)
}

async function display_weather_report() {
    const location = document.getElementById('input-location').value;

    const weather_report = await fetch(`http://localhost:3000/weather_report/${location}`);
    const weather_json = await weather_report.json();
   
    document.getElementById('temp').textContent = JSON.stringify(weather_json.data.temp, null, 2);
    document.getElementById('wind').textContent = JSON.stringify(weather_json.data.wind_speed, null, 2);
    document.getElementById('humidity').textContent = JSON.stringify(weather_json.data.humidity, null, 2);
    document.getElementById('radiation').textContent = JSON.stringify(weather_json.data.radiation_temp, null, 2);
};

document.getElementById('submit-location').addEventListener('click', (e) => {
    e.preventDefault();
    let user_loc = document.getElementById('input-location').value;
    set_weather_report(user_loc)
});

display_weather_report();
