const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieScore = document.getElementById("tie-score");

const result = document.getElementById("result");
const winner = document.getElementById("winner");

const playAgain = document.getElementById("play-again");

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

// Function to get play from user
const playerSelection = () => {
  rock.addEventListener("click", () => {
    playRound("rock", computerPlay());
  });
  paper.addEventListener("click", () => {
    playRound("paper", computerPlay());
  });
  scissors.addEventListener("click", () => {
    playRound("scissors", computerPlay());
  });
};

const playRound = (playerSelection, computerPlay) 
