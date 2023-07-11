function getComputerChoice() {
  const compChoice = ["rock", "paper", "scissors"];
  const random = compChoice[Math.floor(Math.random() * compChoice.length)];
  console.log(`Computer selection is: ${random}`);
  return random;
}

function playRound(playerSelection, computerSelection) {
  getComputerChoice()
  if (playerSelection === computerSelection) {
    console.log(`It's a tie, you both picked ${playerSelection}`);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats rock");
    computerScore++
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats scissors");
    playerScore++
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats rock");
    playerScore++
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose! Scissors beats paper");
    computerScore++
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose! Rock beats Scissors");
    computerScore++
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats paper");
    playerScore++
  }
}

function game() {
  const playGame = playRound(playerSelection, computerSelection);
  return playGame;
}

let playerScore = 0
let computerScore = 0
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(`Player selection is: ${playerSelection}`);
playRound(playerSelection, computerSelection)
console.log(playerScore);
console.log(computerScore);
const fullGame = game();
console.log(fullGame);
