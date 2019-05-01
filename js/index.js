function dpTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let dates = now.getDate();
  let months = now.getMonth();
  let days = now.getDay();
  let ampm = "PM ";

  if (hours > 12)
    hours -= 12;
  else
    ampm = "AM ";

  days = setDays(days);
  months = setMonth(months)
  render(months, dates, days, ampm, hours, minutes, seconds);
}

function setDays(days) {
  if (days == 1)
    return "Monday";
  if (days == 2)
    return "Tuesday";
  if (days == 3)
    return "Wednesday";
  if (days == 4)
    return "Thursday";
  if (days == 5)
    return "Friday";
  if (days == 6)
    return "Saturday";
  if (days == 0)
    return "Sunday";
}

function setMonth(months){
  if (months == 0)
    return "January";
  if (months == 1)
    return "Febuary";  
  if (months == 2)
    return "March";
  if (months == 3)
    return "April";
  if (months == 4)
    return "May";
  if (months == 5)
    return "June";
  if (months == 6)
    return "July";
  if (months == 7)
    return "August";
  if (months == 8)
    return "September";
  if (months == 9) 
    return "Ocotober";
  if (months == 10)
    return "November";
  if (months == 11)
    return "December";
}
function zeroFill(number) {
  if (number < 10)
    return "0" + number;
  else
    return number;
}
function nth(d) {
  if (d > 3 && d < 21) return 'th'; 
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

function render(months, dates, days, ampm, hours, minutes, seconds) {
  var CLOCK = document.getElementById("count").innerHTML = days+ " " + months + " " +dates+ nth(dates) + " "+ zeroFill(hours) + ":" + zeroFill(minutes) + ":" + zeroFill(seconds) + " " + ampm;
}

setInterval(() => dpTime(), 1000);