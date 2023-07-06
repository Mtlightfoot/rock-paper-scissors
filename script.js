function getComputerChoice() {
  const compChoice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  let choice = compChoice[random];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie, you both picked ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else (playerSelection === "scissors" && computerSelection === "paper"); {
    return "You Win! Scissors beats paper";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

let playerPoints = 0
let computerPoints = 0
// A new function called game, use previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end //

function game(playerPoints, computerPoints) {
playRound(playerSelection, computerSelection);
// Create a condition where if the word win is in the playRound return it will give the player a point //
  if (playRound.includes("Win"))
    return "hello" 

// Create a condition where if the word lose is in the playRound return it will give the computer a point //

// Create a condition where if the word tie is in the playRound return it will give no-one a point (I might not need a condition for this) //
}

playRound(playerSelection, computerSelection);

