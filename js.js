function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockHours = document.getElementById('clock-hours');
    const clockMinutes = document.getElementById('clock-minutes');
    const clockSeconds = document.getElementById('clock-seconds');

    clockHours.innerHTML = (hours < 10 ? '0' : '') + hours;
    clockMinutes.innerHTML = (minutes < 10 ? '0' : '') + minutes;
    clockSeconds.innerHTML = (seconds < 10 ? '0' : '') + seconds;
}

setInterval(updateClock, 1000);