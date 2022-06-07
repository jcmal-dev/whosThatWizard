# Who's That Wizard App

An app that prompts the user to guess the name of the Harry Potter character shown. The data is taken from a public Harry Potter API. The app also makes use of localStorage, keeping track of the user's current and max streaks.

**Link to project:** https://whosthatwizard.netlify.app/

![alt tag](/demo.gif)

## How It's Made:

**Tech used:** HTML, CSS, and JavaScript

This app was built using HTML, CSS and JavaScript

## Lessons Learned:

#### 1. How to use localStorage

This project was created after learning about localStorage. I implemented a streak counter using localStorage, similar to Wordle.

```
// Set current streak and max streak if null
if(!localStorage.getItem('currentStreak')){
  localStorage.setItem('currentStreak', 0)
}
if(!localStorage.getItem('maxStreak')){
  localStorage.setItem('maxStreak', 0)
}

// Show current streak and max streak on page
let currentStreakVal = localStorage.getItem('currentStreak')
document.querySelector('#currentStreak').innerText = currentStreakVal
let maxStreakVal = localStorage.getItem('maxStreak')
document.querySelector('#maxStreak').innerText = maxStreakVal

function updateCurrentVal(){
  let currentStreakVal = localStorage.getItem('currentStreak')
  currentStreakVal++
  localStorage.setItem('currentStreak', currentStreakVal)
  document.querySelector('#currentStreak').innerText = localStorage.getItem('currentStreak')
}

function resetCurrentVal(){
  let currentStreakVal = localStorage.getItem('currentStreak')
  currentStreakVal = 0
  localStorage.setItem('currentStreak', currentStreakVal)
  document.querySelector('#currentStreak').innerText = localStorage.getItem('currentStreak')
}

function updateMaxStreak(){
  let currentStreakVal = localStorage.getItem('currentStreak')
  let maxStreakVal = localStorage.getItem('maxStreak')
  if (maxStreakVal < currentStreakVal){
    maxStreakVal = currentStreakVal
    localStorage.setItem('maxStreak', maxStreakVal)
    document.querySelector('#maxStreak').innerText = localStorage.getItem('maxStreak')
  }
}
```
#### 2. Fetching and using data from a public API
```
function getWizard() {
  fetch('https://hp-api.herokuapp.com/api/characters')
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // Filter wizards that have images
      characters = data.filter((character) => character.image != '');

      // Select random wizard
      const random = Math.floor(Math.random() * 25);
      character = characters[random];

      // Show random wizard
      document.querySelector('img').src = character.image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
```

## Other Projects:

Take a look at a few more projects that I have in my own portfolio:

**NASA APOD App:** https://github.com/johnmal-dev/nasa-apod-app
