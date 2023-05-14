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

const playRound = (playerSelection, computerSelection) => {
  let playerValue, computerValue;

  switch (playerSelection) {
    case "paper":
      playerValue = 1;
      break;
    case "rock":
      playerValue = 2;
      break;
    case "scissors":
      playerValue = 3;
      break;
    default:
      return;
  }

  switch (computerSelection) {
    case "paper":
      computerValue = 1;
      break;
    case "rock":
      computerValue = 2;
      break;
    case "scissors":
      computerValue = 3;
      break;
    default:
      return;
  }
  const result = (playerValue - computerValue + 3) % 3;
  if (result === 0) {
    tieScore.textContent = parseInt(tieScore.textContent) + 1;
    // winner.textContent = "Tie!";
    console.log("Tie!")
  } else if (result === 1) {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
    // winner.textContent = "Player wins!";
    console.log("Player wins!")
  } else if (result === 2) {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
    // winner.textContent = "Computer wins!";
    console.log("Computer wins!")
  }
  if (
    parseInt(playerScore.textContent) === 5 ||
    parseInt(computerScore.textContent) === 5
  ) {
    if (parseInt(playerScore.textContent) === 5) {
      // winner.textContent = "Player wins the game!";
      console.log("Player wins the game!")
    } else if (parseInt(computerScore.textContent) === 5) {
      // winner.textContent = "Computer wins the game!";
      console.log("Computer wins the game!")
    }
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    playAgain.style.display = "block";
  }
}

const playAgainButton = () => {
  playAgain.addEventListener("click", () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    tieScore.textContent = 0;
    winner.textContent = "";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    playAgain.style.display = "none";
  });
}

playerPlay();
playAgainButton();

