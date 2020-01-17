const axios = require('../utils/axios');
// const request = require('request');
// const apiKey = 'ede460cd45b8318d26443746c0ffad2d';

const City = require('./City');
const ForecastWeather = require('./ForecastWeather');
const CurrentWeather = require('./CurrentWeather');

class Weather {
  constructor() {}

  getData(city, cc, weatherType) {
    // const key = `${city}/co`
    return Promise.all(getWeatherData(city, cc))
    .then(dataArray => {
      const current = dataArray[0].data;
      const forecast = dataArray[1].data;
      const weather = {
        city: new City(forecast.city),
        // city: new CurrentWeather(name),
        current: new CurrentWeather(current),
        forecast: forecast.list.map(i => new ForecastWeather(i))
      };
      filterData(weather, weatherType);
      return weather;
    });
  }
}
module.exports = new Weather();

function filterData(data, weatherType) {
  console
  if (weatherType === 'current') {
    delete data.forecast;
  }
  if (weatherType === 'forecast') {
    delete data.current;
  }
}

function getWeatherData(city, cc) {
  const queryString = `${city},${cc}`;
  const urls = ['/weather', '/forecast'];
  return urls.map(i => {
    return axios.get(i, { params: { q: queryString,appid: 'ede460cd45b8318d26443746c0ffad2d',
    units: 'metric' } });
  });
}

// function getWeatherData(city, cc) {
//   // let { cc, city } = req.query;
//   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&appid=${apiKey}&units=metric`;

//   request(url, function (err, res, body) {
//     if (err) {
//         res.send(`error`);
//     } else {
//         let weather = JSON.parse(body);
//         return weather;
//         // res.send(weather);
//     }
//   });
// }
