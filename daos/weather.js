const Weather = require('../models/weather');

module.exports.getAllWeather = async () => {
  const weather =  await Weather.find( {});
  return weather;
};

module.exports.getWeatherByLocation = async (location) => {
  return await Weather.findOne( { name: location });
}
