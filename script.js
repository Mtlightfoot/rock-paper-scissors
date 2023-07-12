function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    const random = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return random;
}

function playRound() {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log(`It's a tie, you both picked ${playerSelection}!`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`You lose, paper beats rock!`);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You win, rock beats scissors!`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You win, paper beats rock!`);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`You lose, scissors beats paper!`);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`You lose, rock beats scissors!`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win, scissors beats paper!`);
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

console.log(game());