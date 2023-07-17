var timerId; // Variable to hold the timer interval ID
var time = 0; // Variable to store the time in seconds
var isTimerRunning = false; // Variable to track the timer state

function toggleTimer() {
  // Toggle the timer state
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  // Start the timer
  timerId = setInterval(updateTimer, 1000);
  isTimerRunning = true;
  document.getElementById("toggleTimer").innerHTML = '<span class="bi bi-pause">Stop</span>';
}

function updateTimer() {
  // Update the timer display
  time--;
  if (time < 0) {
    // Timer reached 0, so stop it
    pauseTimer();
    time = 0;
  }

  var timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = formatTime(time);
}

function pauseTimer() {
  // Pause the timer
  clearInterval(timerId);
  isTimerRunning = false;
  document.getElementById("toggleTimer").innerHTML = '<span class="bi bi-play">Start</span>';
}

function resetTimer() {
  // Reset the timer
  clearInterval(timerId);
  time = 0;
  var timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = "00:00";
  isTimerRunning = false;
  document.getElementById("toggleTimer").innerHTML = '<span class="bi bi-play">Start</span>';
}

function addMinute() {
  // Add 1 minute to the timer
  time += 60;
  var timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = formatTime(time);
}

function changeTime() {
  // Change the timer time
  var newTime = prompt("Enter the time in MM:SS format:");
  if (newTime !== null) {
    var timeParts = newTime.split(":");
    if (timeParts.length === 2) {
      var minutes = parseInt(timeParts[0]);
      var seconds = parseInt(timeParts[1]);

      if (!isNaN(minutes) && !isNaN(seconds)) {
        time = minutes * 60 + seconds;
        var timerDisplay = document.getElementById("timer");
        timerDisplay.textContent = formatTime(time);
      }
    }
  }
}

function formatTime(time) {
  // Format the time as MM:SS
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);

  return (
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2)
  );
}
