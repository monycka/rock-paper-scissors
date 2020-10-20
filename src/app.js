function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
      return "Rock";
  }
  else if (randomNumber === 2) {
      return "Paper";
  }
  else if (randomNumber === 3) {
      return "Scissors"
  }
}

let playerScore = 0;
let computerScore = 0;

function results(playerSelection, computerSelection) {
  if ((playerSelection === "rock") && (computerSelection === "scissors")) {
      playerScore++;
      return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  else if ((playerSelection === "paper") && (computerSelection === "rock")) {
      playerScore++;
      return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
      playerScore++;
      return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  else if (computerSelection === playerSelection) {
      return `It's a tie!`;
  }
  else {
      computerScore++;
      return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}
