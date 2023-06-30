let timerEl = document.querySelector('#pomodoro-time');

function runTimer() {
    const textTimer = timerEl.textContent;
    let seconds = +textTimer.slice(-2);
    let minutes = +textTimer.slice(0, 2);
    // остановка, когда 00:00
    if (minutes === 0 && seconds === 0) {
        clearInterval(timerId);
        minutes.textContent = "";
        minutes.textContent = "25";
        return
    }
    //если закончилтсь секунды например 06:00
    if (seconds === 0) {
        //ументшаем минуты и увеличиваем секунды
        minutes--;
        seconds = 59;
    } else {
        //если секугды еще есть, ументшвем
        seconds--;
    }
    timerEl.textContent = `${format(minutes)}:${format(seconds)}`
}

function format(val) {
    if (val < 10) {
        return `0${val}`
    }
    return val;
}

let buttonStartStop = document.querySelector('#start');
let timerId;
buttonStartStop.addEventListener("click", function() {
    if (buttonStartStop.textContent === 'stop') {
        buttonStartStop.textContent = 'start';
        clearInterval(timerId);
    } else {
        buttonStartStop.textContent = 'stop';
        timerId = setInterval(runTimer, 100);
    }
})