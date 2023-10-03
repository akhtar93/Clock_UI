(function () {
  var useDarkTheme = false;
  function startClock() {
    setInterval(updateClockTimer, 1000);
    getCUrrentLocation();
  }
  function getCUrrentLocation() {
    let weather;
    if (!navigator.geolocation) {
      return;
    }
   navigator.geolocation.getCurrentPosition((pos) => {
    const weatherSection = document.getElementById('weatherInfo');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=39a25b127cf04b4eab27eac178ae8720`;
    fetch(apiUrl, { method: 'GET' })
    .then((resp) => resp.json())
    .then((data) => {
      weather = new Weather(data);
      updateForWeatherDetais(weather, weatherSection);
    });
   });
  }
  function updateForWeatherDetais(weatherObj, weatherSection) {
    weatherSection.style.display = 'flex';
    const locationSelector = document.getElementById('locationName');
    const weatherType = document.getElementById('weatehrCondition');
    const weatherDesc = document.getElementById('weatherDescription');
    const temperature = document.getElementById('temperature');
    const minTemp = document.getElementById('minTemp');
    const maxTemp = document.getElementById('maxTemp');
    const humidity = document.getElementById('humididy');
    const wind = document.getElementById('wind');
    locationSelector.innerText = weatherObj.getLocationInfo().location;
    weatherType.innerText = weatherObj.getClimateCondition().type;
    weatherDesc.innerText = weatherObj.getClimateCondition().description;
    temperature.innerText = weatherObj.getTemperature();
    minTemp.innerText = weatherObj.getMinMaxTemperature().minTemp;
    maxTemp.innerText = weatherObj.getMinMaxTemperature().maxTemp;
    humidity.innerText = weatherObj.getHumidity();
    wind.innerText = weatherObj.getWindSPeed();

  }
  function updateClockTimer() {
    var hourHand = document.getElementById('clockHour');
    var minuteHand = document.getElementById('clockMinute');
    var secondHand = document.getElementById('clockSecond');
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    const h = hour * 30;
    const m = minute * 6;
    const s = seconds * 6

    /* 1 minute = 60secs
        1 sec = 1/60 * 360 = 6


        1hour = 60 minutes
        1min = 1/60 hour * 360deg

        360dg = 12hours
        1hour = 1/12 * 360
    */

    hourHand.style.transform = `rotateZ(${h}deg)`;
    minuteHand.style.transform = `rotateZ(${m}deg)`;
    secondHand.style.transform = `rotateZ(${s}deg)`;
  }
  window.addEventListener('DOMContentLoaded', startClock);
})()