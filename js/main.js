//Example fetch using pokemonapi.co
let characters, character;

resetWizard()

function resetWizard(){
  fetch('https://hp-api.herokuapp.com/api/characters')
  .then(res => res.json()) // parse response as JSON
  .then(data => {

    // Filter wizards that have images
    characters = data.filter(character => character.image != "")

    // Select random wizard
    const random = Math.floor(Math.random() * (25))
    character = characters[random]

    // Show random wizard
    document.querySelector('img').src = character.image
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}

document.querySelector('button').addEventListener('click', guessWizard)

function guessWizard(){
  const guess = document.querySelector('input').value.toLowerCase()

  const fullName = character.name
  const firstName = fullName.split(' ')[0].toLowerCase()
  const lastName = fullName.split(' ')[1].toLowerCase()
  
  if (guess === firstName || guess === lastName || guess === fullName){
    document.querySelector('h2').innerText = 'Correct!'
    resetWizard()
    updateCurrentVal()
    updateMaxStreak()
  } else {
    document.querySelector('h2').innerText = `Bloody Hell. The name is ${fullName}`
    resetCurrentVal()
    resetWizard()
  }
}

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