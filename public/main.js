const main = () => {}

let LeftScore = 0
let RightScore = 0

const disableButtons = setTo => {
  for (let i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('button')[i].disabled = setTo
  }
}

const disableInput = setTo => {
  for (let i = 0; i < document.querySelectorAll('input').length; i++) {
    document.querySelectorAll('input')[i].disabled = setTo
  }
}
const addOneToLeftScore = () => {
  // console.log('adding score 1')
  LeftScore++
  document.querySelector('.team-1-score').textContent = LeftScore
  if (LeftScore >= 21) {
    if (document.querySelector('.team-1-name').textContent === 'Team 1') {
      document.querySelector('.team-1-name').textContent = 'You Win!'
    } else {
      document.querySelector('.team-1-name').textContent =
        document.querySelector('.team-1-name').textContent + ' Win!'
    }
    document.querySelector('.resetbox').style.display = 'flex'
    disableButtons(true)
    disableInput(true)
    document.querySelector('.reset-button').disabled = false
  }
}

const addOneToRightScore = () => {
  // console.log('adding score 1')
  RightScore++
  document.querySelector('.team-2-score').textContent = RightScore
  if (RightScore >= 21) {
    if (document.querySelector('.team-2-name').textContent === 'Team 2') {
      document.querySelector('.team-2-name').textContent = 'You Win!'
    } else {
      document.querySelector('.team-2-name').textContent + ' Win!'
    }
    document.querySelector('.resetbox').style.display = 'flex'
    disableButtons(true)
    disableInput(true)
    document.querySelector('.reset-button').disabled = false
  }
}

const subOneToLeftScore = () => {
  // console.log('subtracting score 1')

  if (LeftScore <= 0) {
    LeftScore = 0
  } else {
    LeftScore--
    console.log(LeftScore + 'bye')
    document.querySelector('.team-1-score').textContent = LeftScore
  }
}

const subOneToRightScore = () => {
  // console.log('subtracting score 1')
  if (RightScore <= 0) {
    RightScore = 0
  } else {
    RightScore--
    document.querySelector('.team-2-score').textContent = RightScore
  }
}

const addTeam1Name = () => {
  const Team1Name = document.querySelector('.team-1-input').value
  // console.log('add Team 1 Name')
  console.log(Team1Name)
  document.querySelector('.team-1-name').textContent = Team1Name
}

const addTeam2Name = () => {
  const Team2Name = document.querySelector('.team-2-input').value
  // console.log('add Team 2 Name')
  console.log(Team2Name)
  document.querySelector('.team-2-name').textContent = Team2Name
}

const resetScoreboard = () => {
  // Re-enable the buttons
  disableButtons(false)
  disableInput(false)
  // Set scores to 0
  LeftScore = 0
  RightScore = 0
  document.querySelector('.team-1-score').textContent = LeftScore
  document.querySelector('.team-2-score').textContent = RightScore
  // Set Team Names back to Team 1 and Team 2
  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-2-name').textContent = 'Team 2'
  // Clear text input fields
  for (let i = 0; i < document.querySelectorAll('input').length; i++) {
    document.querySelectorAll('input')[i].value = ''
  }
  // Make reset button disappear
  document.querySelector('.resetbox').style.display = 'none'
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', addTeam1Name)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', addTeam2Name)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToLeftScore)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneToRightScore)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subOneToLeftScore)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subOneToRightScore)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subOneToRightScore)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subOneToLeftScore)
document
  .querySelector('.reset-button')
  .addEventListener('click', resetScoreboard)
