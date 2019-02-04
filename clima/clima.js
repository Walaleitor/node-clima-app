const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=a79f2f76807a5bd8d5a1dd669e31142b`);

    return resp.data.main.temp

}

module.exports = {
    getClima
}