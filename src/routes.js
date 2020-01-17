const express = require('express');
const weatherRoutes = require('./routes/weather');
const responseFormatter = require('./utils/responseFormatter');

const router = express.Router();
// let weather = {
//     status: null,
//     message: null,
//     data: null
// };

router.get('/', (req, res) =>
  responseFormatter(
    res,
    200,
    'Welcome to the weather api! Visit /api-docs for help',
    null
  )
);

// router.get('/', (req, res) => {
//     weather.status = "success";
//     weather.message = "Welcome to the weather api! Visit /api-docs for help";
//     weather.data = null;
//     res.send(weather);
// });

router.use('/api/weather', weatherRoutes);

module.exports = router;