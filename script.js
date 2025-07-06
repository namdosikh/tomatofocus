let timer;
const timerDisplay = document.getElementById("timer");

document.getElementById("focus").addEventListener("click", () => {
    document.getElementById("timer").textContent = "25:00";
    timeLeft = 25 * 60; // 25 minutes in seconds
});

document.getElementById("break").addEventListener("click", () => {
    document.getElementById("timer").textContent = "5:00";
    timeLeft = 5 * 60; // 5 minutes in seconds
});

let isRunning = false;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

document.getElementById("startButton").addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
});

document.getElementById("pauseButton").addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById("resetButton").addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
});

document.getElementById("addTaskButton").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    taskList.innerHTML += `<li>${taskInput.value}</li>`;
});

updateDisplay();