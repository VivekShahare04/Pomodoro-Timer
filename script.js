let currentTime = 3600;  // Initial time set to 1 hour
let isPaused = true;
let interval;

const alarmSound = new Audio('alarm-clock-short-6402.mp3')
alarmSound.preload = 'auto';  // Preload the audio

const timerDisplay = document.getElementById('timer-display');
const sessionType = document.getElementById('session-type');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

// Update the display
function updateDisplay(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    timerDisplay.innerHTML = `<span class="editable" id="hours">${hours.toString().padStart(2, '0')}</span>:<span class="editable" id="minutes">${minutes.toString().padStart(2, '0')}</span>:<span class="editable" id="seconds">${seconds.toString().padStart(2, '0')}</span>`;
}

// Start the timer
function startTimer() {
    if (isPaused) {
        isPaused = false;
        interval = setInterval(countdown, 1000);
    }
}

// Pause the timer
function pauseTimer() {
    clearInterval(interval);
    isPaused = true;
}

// Reset the timer
function resetTimer() {
    clearInterval(interval);
    isPaused = true;
    currentTime = 3600;  // Reset to 1 hour
    updateDisplay(currentTime);
    sessionType.textContent = "Timer Reset";
}

// Countdown function
function countdown() {
    if (currentTime > 0) {
        currentTime--;
        updateDisplay(currentTime);
    } else {
        clearInterval(interval);
        sessionType.textContent = "Time's Up!";
        alarmSound.play().catch((error) => {
            console.log("Audio playback failed:", error);
        });
    }
}


// Handle time input from the user
function handleTimeInput(unit, maxLimit) {
    const inputValue = prompt(`Enter new ${unit} (0-${maxLimit}):`);
    let newValue = parseInt(inputValue, 10);
    
    if (isNaN(newValue) || newValue < 0 || newValue > maxLimit) {
        alert(`Invalid ${unit}! Please enter a number between 0 and ${maxLimit}.`);
        return;
    }

    let hours = Math.floor(currentTime / 3600);
    let minutes = Math.floor((currentTime % 3600) / 60);
    let seconds = currentTime % 60;

    if (unit === "hours") {
        hours = newValue;
    } else if (unit === "minutes") {
        minutes = newValue;
    } else if (unit === "seconds") {
        seconds = newValue;
    }

    currentTime = hours * 3600 + minutes * 60 + seconds;
    updateDisplay(currentTime);
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('editable')) {
        const id = e.target.id;
        if (id === 'hours') {
            handleTimeInput('hours', 23);  // Hours between 0 and 23
        } else if (id === 'minutes') {
            handleTimeInput('minutes', 59);  // Minutes between 0 and 59
        } else if (id === 'seconds') {
            handleTimeInput('seconds', 59);  // Seconds between 0 and 59
        }
    }
});

// Initial display
updateDisplay(currentTime);
