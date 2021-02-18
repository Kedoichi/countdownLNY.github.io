const dayCD = document.getElementById("days");
const hourCD = document.getElementById("hours");
const minCD = document.getElementById("mins");
const secCD = document.getElementById("secs");

const newYear = "01 Feb 2022";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSec = (newYearDate - currentDate) / 1000;
  const day = Math.floor(totalSec / 3600 / 24);
  const hour = Math.floor(totalSec / 3600) % 24;
  const min = Math.floor(totalSec / 60) % 60;
  const sec = Math.floor(totalSec) % 60;

  console.log(day, hour, min, sec);

  dayCD.innerHTML = formatTime(day);
  hourCD.innerHTML = formatTime(hour);
  minCD.innerHTML = formatTime(min);
  secCD.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
