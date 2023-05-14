

const computerPlay = () => {
  const words = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};

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
