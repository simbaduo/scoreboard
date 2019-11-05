const main = () => {}

let LeftScore = 0
let RightScore = 0

const addOneToLeftScore = () => {
  // console.log('adding score 1')
  LeftScore++
  document.querySelector('.team-1-score').textContent = LeftScore
}

const addOneToRightScore = () => {
  // console.log('adding score 1')
  RightScore++
  document.querySelector('.team-2-score').textContent = RightScore
}

const subOneToLeftScore = () => {
  // console.log('subtracting score 1')
  LeftScore--
  document.querySelector('.team-1-score').textContent = LeftScore
}

const subOneToRightScore = () => {
  // console.log('subtracting score 1')
  RightScore--
  document.querySelector('.team-2-score').textContent = RightScore
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

// const addTeam2Name = () => {
//   const Team2Name = (document.querySelector('.team-2-input').value
//   // console.log('add Team 2 Name')
//   console.log(addTeam2Name)
// }

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
