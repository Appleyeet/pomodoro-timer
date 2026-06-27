let totalSeconds = 25 * 60;

let interval;

const timer = document.getElementById("timer");

function updateDisplay() {

    let minutes = Math.floor(totalSeconds / 60);

    let seconds = totalSeconds % 60;

    timer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

}

updateDisplay();

document
    .getElementById("startButton")
    .addEventListener("click", function () {

        if (interval) return;

        interval = setInterval(function () {

            totalSeconds--;

            updateDisplay();

            if (totalSeconds <= 0) {

                clearInterval(interval);

                interval = null;

            }

        }, 1000);

    });
    document
.getElementById("pauseButton")
.addEventListener("click", function(){

clearInterval(interval);

interval = null;

});
document
.getElementById("resetButton")
.addEventListener("click", function(){

clearInterval(interval);

interval = null;

totalSeconds = 25 * 60;

updateDisplay();

});