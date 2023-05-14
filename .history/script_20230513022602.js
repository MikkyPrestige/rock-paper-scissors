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
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.
// Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!

// Define variables to store the game scores
let playerScore = 0;
let computerScore = 0;

// Define the playRound function
function playRound(playerSelection) {
  // Generate a random computer selection
  const computerSelection = computerPlay();

  // Determine the winner of the round
  const roundResult = getRoundResult(playerSelection, computerSelection);

  // Update the game scores based on the round result
  if (roundResult === "win") {
    playerScore++;
  } else if (roundResult === "lose") {
    computerScore++;
  }

  // Display the round result and current score to the user
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You ${roundResult}! The score is ${playerScore}-${computerScore}.`;

  // Check if a player has reached 5 points and announce the winner
  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore > computerScore ? "Player" : "Computer";
    resultDiv.innerHTML += `<br><br>${winner} wins the game!`;

    // Disable the game buttons after a winner is announced
    const gameButtons = document.querySelectorAll(".game--img button");
    gameButtons.forEach(button => {
      button.disabled = true;
    });
  }
}

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
