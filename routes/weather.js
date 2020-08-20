const { Router } = require("express");
const router = Router();
const weatherDAO = require('../daos/weather');

router.get("/location", async (req, res, next) => {
  let {name} = req.query;
  if (name) {
    let weather = await weatherDAO.getWeatherByLocation(name);
    if (weather) {
      res.render('weather', {
        name: weather.name,
        temperature: weather.temperature
      })
    } else {
      res.statusCode = 404;
      res.render('weather', {
        name: 'Other',
        temperature: 'not available'
      })
    }
  } else {
    res.append('headers').set('location', '/weather');
    res.sendStatus(302);
  }
});

module.exports = router;
