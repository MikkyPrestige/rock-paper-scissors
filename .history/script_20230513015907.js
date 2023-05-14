const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieScore = document.getElementById("tie-score");

const result = document.getElementById("result");
const winner = document.getElementById("winner");

const playAgain = document.getElementById("play-again");

const playerSelection = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
