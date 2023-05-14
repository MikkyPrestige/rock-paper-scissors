// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");

// const playerScore = document.getElementById("player-score");
// const computerScore = document.getElementById("computer-score");
// const tieScore = document.getElementById("tie-score");

// const result = document.getElementById("result");
// const winner = document.getElementById("winner");

// const playAgain = document.getElementById("play-again");

const computerPlay = () => {
  const words = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};
// Create three buttons, one for each selection. Add an event listener to the buttons that call  your playRound function with the correct playerSelection every time a button is clicked.  (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.

// Define variables to store the game scores
let playerScore = 0;
let computerScore = 0;

// Define the playRound function
function playRound(playerSelection) {
  // Get the computer's selection
  const computerSelection = computerPlay();

  // Determine the winner
  if (playerSelection === computerSelection) {
    // It's a tie
    result.textContent = `It's a tie! You both chose ${playerSelection}.`;

// Get references to the game buttons and add event listeners
const rockButton = document.getElementById("rock-btn");
rockButton.addEventListener("click", function() {
  playRound("rock");
});

const paperButton = document.getElementById("paper-btn");
paperButton.addEventListener("click", function() {
  playRound("paper");
});

const scissorsButton = document.getElementById("scissors-btn");
scissorsButton.addEventListener("click", function() {
  playRound("scissors");
});
