function getComputerChoice() {
    const compChoice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    let choice = compChoice[random];
    return choice;
  }
  console.log(getComputerChoice()) 
