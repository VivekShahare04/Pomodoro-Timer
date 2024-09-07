Timer Extension

A simple yet customizable timer extension that allows you to set hours, minutes, and seconds by directly interacting with the time displayed. The timer comes with a start, pause, and reset functionality, and it plays an alarm sound when the countdown reaches zero.

Features
Editable Time: Set hours, minutes, and seconds directly by clicking on the time digits and inputting the desired values.
Start, Pause, and Reset: Controls for managing the timer state.
Sound Alert: An alarm sound plays when the timer finishes.
User-Friendly Interface: Simple design with large digits for easy interaction.
Preloaded Alarm Sound: Ensures timely audio playback when the countdown finishes.
Installation

1. Clone or download the repository
You can clone the repository using the following command in your terminal:

bash
Copy code
git clone https://github.com/yourusername/timer-extension.git
Alternatively, you can download the ZIP file from GitHub and extract it.

2. Move to the project directory
bash
Copy code

cd timer-extension

4. Load the extension into Chrome
Open Chrome and navigate to chrome://extensions/
Enable Developer mode (toggle switch in the top-right corner).
Click on Load unpacked and select the folder containing this project.
How to Use
Set the Time:

Click directly on the Hours, Minutes, or Seconds digits to modify the countdown time.
After clicking, input a number within the valid range:
Hours: 0-23
Minutes: 0-59
Seconds: 0-59
Start/Pause/Reset:

Start the countdown using the "Start" button.
Pause the countdown using the "Pause" button.
Reset the countdown to 1 hour using the "Reset" button.
Sound Notification:

When the countdown finishes, an alarm sound will play to notify you that the time is up.
Configuration
Alarm Sound: You can replace the alarm sound (alarm-clock-short-6402.mp3) with your own audio file if needed. Just replace the existing .mp3 file in the project directory with another one, keeping the same file name.
Code Overview
index.html: Contains the basic structure for the timer, with buttons and placeholders for the timer display.
style.css: Provides minimal styling to give the extension a clean and user-friendly interface.
script.js: Handles the timer functionality (start, pause, reset), time input from the user, and audio playback for the alarm.
Key Functions in script.js:
updateDisplay(time): Updates the time on the timer.
startTimer(): Starts the countdown timer.
pauseTimer(): Pauses the countdown timer.
resetTimer(): Resets the countdown to the initial time (1 hour).
countdown(): The function that counts down the timer and plays the alarm when time is up.
handleTimeInput(unit, maxLimit): Handles user input for changing hours, minutes, or seconds.
Future Improvements
Customizable Sound: Allow users to select their own alarm sound.
Multiple Timers: Support for creating and managing multiple timers simultaneously.
Visual Notifications: Add a flashing screen or a popup notification when time's up.
Save State: Save the timer state and continue after browser restarts.
