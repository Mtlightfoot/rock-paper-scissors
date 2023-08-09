function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    const random = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return random;
}

function playRound() {
    const playerSelection = prompt("Please select Rock, Paper or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log(`It's a tie, you both picked ${playerSelection}!`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`You lose, paper beats rock!`);
        computerScore ++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You win, rock beats scissors!`);
        playerScore ++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You win, paper beats rock!`);
        playerScore ++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`You lose, scissors beats paper!`);
        computerScore ++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`You lose, rock beats scissors!`);
        computerScore ++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win, scissors beats paper!`);
        playerScore ++;
    }
}

let playerScore = 0;
let computerScore = 0;

/* function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerScore > computerScore) {
        console.log(`You scored ${playerScore} and the computer scored ${computerScore}. You are the winner!`);
    } else {
        console.log(`Uh oh, you scored ${playerScore} and the computer scored ${computerScore}. You lose!`)
    }
}

game(); */