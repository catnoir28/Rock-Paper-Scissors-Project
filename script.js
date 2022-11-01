let playerScore = 0
let compScore = 0



const getComputerChoice = () => {
  const arrOfChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random()*3)
  const compChoice = arrOfChoices[randomNum]
  return compChoice
}
console.log(getComputerChoice())

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'You tied! You both picked rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'You tied! You both picked rock'
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'You tied! You both picked rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    compScore++
    return 'You lost! Rock crushes scissors'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++
    return 'You lost! Paper covers rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You won! Scissors cuts paper'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return 'You won! Rock crushes scissors'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compScore++
    return 'You lost! Scissors cuts paper'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return 'You won! Paper covers rock'
  }
}

const computerSelection = getComputerChoice()
const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Your choice', 'rock, paper, or scissors').toLowerCase()
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
  }
  if (playerScore > compScore) {
    return 'You beat the computer! You are a genius!'
  } else if (playerScore < compScore) {
    return 'You got beat by computer:('
  } else {
    return 'You tied with the computer!'
  }
}

console.log(game())
