const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours'); 
const minutesEl = document.getElementById('minutes'); 
const secondsEl = document.getElementById('seconds'); 

const newYears = '25 Dec 2020'

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }  else {
        time;
    }
}

// function formatTime(time) {
//    return time < 10 ? `0${time}` : time;
// }

//Initial call 

countdown(); 

setInterval(countdown, 1000); 

