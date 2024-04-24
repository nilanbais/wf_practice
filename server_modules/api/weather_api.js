// custom
const APIBaseClass = require("./api_base_class")


class WeatherAPI extends APIBaseClass {
    // official api docs: https://www.weatherapi.com/docs/ 
    constructor() {
        super("WeatherAPI");
    };

    async get_current_weather(location) {
        let api_endpoint = '/current.json'  // note to self => name of the endpint, no pointer to json file.

        this.header = {
            q: location
        };

        let result = await this.get_response(api_endpoint);
        return result;
    };

};

module.exports = WeatherAPI;