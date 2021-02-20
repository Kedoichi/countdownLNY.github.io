const dayCD = document.getElementById("days");
const hourCD = document.getElementById("hours");
const minCD = document.getElementById("mins");
const secCD = document.getElementById("secs");

let newYearList = [];
function newYearObj(year, newYearDate) {
  this.year = year;
  this.newYearDate = newYearDate;
}
newYearList.push(new newYearObj("2018", "16 Feb 2018"));
function checkYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
function isValidTime() {
  const newYearDate = new Date(newYearList[newYearList.length - 1].newYearDate);
  const currentDate = new Date();
  const totalSec = (newYearDate - currentDate) / 1000;
  if (totalSec < 0) {
    if (checkYear(Number(newYearList[newYearList.length - 1].year)))
      newYearList.push(
        new newYearObj(
          Number(newYearList[newYearList.length - 1].year) + 1,
          new Date(newYearList[newYearList.length - 1].newYearDate).addDays(384)
        )
      );
    else
      newYearList.push(
        new newYearObj(
          Number(newYearList[newYearList.length - 1].year) + 1,
          new Date(newYearList[newYearList.length - 1].newYearDate).addDays(354)
        )
      );
    isValidTime();
  }
  return true;
}
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
function countdown() {
  const newYearDate = new Date(newYearList[newYearList.length - 1].newYearDate);
  const currentDate = new Date();
  const totalSec = (newYearDate - currentDate) / 1000;
  const day = Math.floor(totalSec / 3600 / 24);
  const hour = Math.floor(totalSec / 3600) % 24;
  const min = Math.floor(totalSec / 60) % 60;
  const sec = Math.floor(totalSec) % 60;

  dayCD.innerHTML = formatTime(day);
  hourCD.innerHTML = formatTime(hour);
  minCD.innerHTML = formatTime(min);
  secCD.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
if (isValidTime()) {
  console.log(newYearList);
  countdown();
  setInterval(countdown, 1000);
}
