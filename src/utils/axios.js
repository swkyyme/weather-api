const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  // params: {
  //   appid: 'ede460cd45b8318d26443746c0ffad2d',
  //   units: 'metric'
  // }
});
// instance.interceptors.request.use(req => {
//   console.log({req})
//   return req;
// })

module.exports = instance;