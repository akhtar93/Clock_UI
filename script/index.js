(function () {
  var useDarkTheme = false;
  function startClock() {
    const button = document.getElementById('theme');
  button.addEventListener('click', function() {
    useDarkTheme = !useDarkTheme;
    const body = document.querySelector('body');
    if (useDarkTheme) {
      body.classList.add('dark');
    } else{
      body.classList.remove('dark');
    }
  });
    setInterval(updateClockTimer, 1000)
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