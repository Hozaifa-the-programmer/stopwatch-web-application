let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startPause() {
  const startPauseBtn = document.getElementById("startPause");
  if (isRunning) {
    clearInterval(timer);
    startPauseBtn.textContent = "Start";
  } else {
    startTime = new Date() - lapCount * 1000;
    timer = setInterval(updateDisplay, 1000);
    startPauseBtn.textContent = "Pause";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  lapCount = 1;
  updateDisplay();
  document.getElementById("startPause").textContent = "Start";
  document.getElementById("lapList").innerHTML = "";
}

function lap() {
  if (isRunning) {
    const lapTime = new Date() - startTime;
    const formattedLapTime = formatTime(lapTime);
    const lapList = document.getElementById("lapList");
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${formattedLapTime}`;
    lapList.appendChild(lapItem);
    lapCount++;
  }
}

function updateDisplay() {
  const currentTime = new Date() - startTime;
  const formattedTime = formatTime(currentTime);
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
  const date = new Date(time);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
