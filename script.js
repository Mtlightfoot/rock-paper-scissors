function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    const random = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return random;
}

let outcome = "Result";

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        outcome = `It's a tie, you both picked ${playerSelection}!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        outcome = `You lose, paper beats rock!`;
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        outcome = `You win, rock beats scissors!`;
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        outcome = `You win, paper beats rock!`;
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        outcome = `You lose, scissors beats paper!`;
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        outcome = `You lose, rock beats scissors!`;
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        outcome = `You win, scissors beats paper!`;
        playerScore++;
    }
    if (playerScore === 5) {
        outcome = "You are the Winner! Congratulations!";
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        document.getElementById('rock').innerHTML = "GAME OVER";
        document.getElementById('paper').innerHTML = "GAME OVER";
        document.getElementById('scissors').innerHTML = "GAME OVER";
    }
    else if (computerScore === 5) {
        outcome = "You are the Loser! The robots are smarter than you.";
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        document.getElementById('rock').innerHTML = "GAME OVER";
        document.getElementById('paper').innerHTML = "GAME OVER";
        document.getElementById('scissors').innerHTML = "GAME OVER";

    }
    document.getElementById("result").innerHTML = outcome;
    document.getElementById("pS").innerHTML = playerScore;
    document.getElementById("cS").innerHTML = computerScore;
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener('click', function (e) {
    playRound("rock");
})
const paperButton = document.querySelector("#paper");
paperButton.addEventListener('click', function (e) {
    playRound("paper");
})
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener('click', function (e) {
    playRound("scissors");
})

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