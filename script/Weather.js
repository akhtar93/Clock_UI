// 39a25b127cf04b4eab27eac178ae8720
const WAETHER_API_KEY = '39a25b127cf04b4eab27eac178ae8720'
class Weather{
  constructor(params) {
    this.weatherResponse = params;
  }
  getLocationInfo() {
    return {
      coord: this.weatherResponse?.coord,
      location: this.weatherResponse?.name
    };
  }
  getTemperature() {
    const mainTemp = utilFormatWeather(this.weatherResponse.main.temp, null);
    return mainTemp;
  }
  getHumidity() {
    return `${this.weatherResponse.main.humidity}%`;
  }
  getMinMaxTemperature() {
    const minTemp = utilFormatWeather(this.weatherResponse.main.temp_min, null);
    const maxTemp = utilFormatWeather(this.weatherResponse.main.temp_max, null);
    return {
      minTemp,
      maxTemp
    };
  }
  getWindSPeed() {
    return `${this.weatherResponse.wind.speed} Km/hr`;
  }
  getClimateCondition() {
    return {
      type: this.weatherResponse.weather[0].main,
      description: this.weatherResponse.weather[0].description
    };
  }
}
function utilFormatWeather(param, conversionType = 'celcius') {
  if (!param) { return 0; }

  if (!conversionType) {
    return (param - 273).toFixed(2);
  }
  // convert from farhenheit to celcius
  if (conversionType === 'celcius') {
    // c/5 = (F-32) / 9
    return (param - 32) * 5 / 9;
  }
  // convert celcius to Farenheit
  return ((param/5) * 9) + 32;
}