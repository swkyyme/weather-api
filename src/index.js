const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3000;


const app = express();

app.use(helmet());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('common'));
}
app.use(routes);


// const express = require('express');
// const app = express();
// const request = require('request');
// const apiKey = 'ede460cd45b8318d26443746c0ffad2d';
// let weather = {
//     status: null,
//     message: null,
//     data: null
// };

// app.get('/api/weather', (req, res) => {
//     let { cc, city } = req.query;
//     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&appid=${apiKey}&units=metric`;

//     request(url, function (err, response, body) {
//         if (err) {
//             res.send(`error`);
//         } else {
//             let currentWeather = JSON.parse(body);
//             res.send(currentWeather);
//         }
//       });
// });

// app.get('/', (req, res) => {
//     weather.status = "success";
//     weather.message = "Welcome to the weather api! Visit /api-docs for help";
//     weather.data = null;
//     res.send(weather);
// });


app.listen(PORT, () => {
    console.log (`server is listening on port ${PORT}`);
});