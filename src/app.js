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