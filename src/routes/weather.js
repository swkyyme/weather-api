const express = require('express');
const weather = require('../models/Weather');
const responseFormatter = require('../utils/responseFormatter');
const cityAndCcValidator = require('../middlewares/cityAndCcValidator');

const router = express.Router();

router.get('/', cityAndCcValidator, (req, res, next) => {
  const { cc, city, weatherType } = req.query;
  weather
    .getData(city, cc, weatherType)
    .then(response => responseFormatter(res, 200, null, response))
    .catch(err => next(err));
});

module.exports = router;