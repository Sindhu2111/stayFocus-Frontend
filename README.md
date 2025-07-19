
#  Focus Reminder App

This is a simple and beginner-friendly web app that reminds you to stay focused at regular time intervals. Useful for productivity sessions, Pomodoro-style work, or gentle task nudges.

## Features

- Set a custom time interval (in minutes) for reminders
- Plays a short alarm sound at each interval
- Shows an alert message to stay focused
- Responsive and visually appealing interface using HTML, CSS, and JavaScript

## Project Structure

```
├── index.html         # Main HTML structure
├── style.css          # App styling
├── script.js          # Reminder logic using JavaScript
└── alarm.mp3.wav      # Alarm sound played at each interval
```

## Getting Started

1. Clone or download this repository.
2. Make sure all files (`index.html`, `style.css`, `script.js`, `alarm.mp3.wav`) are in the same folder.
3. Open `index.html` in your web browser.
4. Enter your desired time interval in minutes and click **Start**.
5. To stop the reminder, click **Stop**.

### Important

Update the audio path in `index.html` if needed:

```html
<audio id="alarmSound" src="alarm.mp3.wav" preload="auto"></audio>
```

> Do not use system-specific paths like `E:\stay focus\alarm.mp3.wav`


