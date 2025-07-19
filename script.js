let intervalId;

function startReminder() {
  const minutes = parseInt(document.getElementById("minutesInput").value);
  const status = document.getElementById("status");

  if (!minutes || minutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  stopReminder(); // Stop any existing interval
  const ms = minutes * 60 * 1000;

intervalId = setInterval(function () {
  // Get the alarm sound
  let alarm = document.getElementById("alarmSound");

  // Rewind and play the sound
  alarm.currentTime = 0;
  alarm.play();

  // Show alert after 1 second (so sound plays first)
  setTimeout(function () {
    alert(" Stay focused!");
  }, 1000);

}, ms);

  status.innerText = `Reminder set for every ${minutes} minutes.`;
}

function stopReminder() {
  clearInterval(intervalId);
  document.getElementById("status").innerText = "Reminder stopped.";
}
