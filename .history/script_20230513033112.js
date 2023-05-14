// get DOM elements for buttons and result display
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDisplay = document.getElementById("result");
const scores = document.getElementById("scores");
const winner = document.getElementById("winner");
const reset = document.getElementById("reset");
const replay = document.getElementById("replay");

// Get a random selection for the computer
const computerPlay = () => {
  const words = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  // add event listeners to buttons
  rockBtn.addEventListener("click", () => playRound("rock"));
  paperBtn.addEventListener("click", () => playRound("paper"));
  scissorsBtn.addEventListener("click", () => playRound("scissors"));

  function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let roundResult;
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

    if (playerValue === computerValue) {
      roundResult = `It's a tie! You both chose ${playerSelection}.`;
    } else if ((playerValue - computerValue + 3) % 3 === 1) {
      playerScore++;
      roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    // update result display
    resultDisplay.textContent = roundResult;
    scores.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    // check for end of game
    if (playerScore === 5) {
      winner.textContent = "You win the game! Final score"
      disable();
    } else if (computerScore === 5) {
      winner.textContent = "You lose the game! Final score";
      disable();
    }
  }

  function disable() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

// call playGame function when DOM is loaded
window.addEventListener("DOMContentLoaded", playGame);

// Create a function to reset the game
reset.addEventListener("click", function () {
  winner.textContent = "";
  resultDisplay.textContent = "";
});

// Create a function to play again
replay.addEventListener("click", function () {
  winner.textContent = "";
  resultDisplay.textContent = "";
  playerScore = 0;
  computerScore = 0;
});

// // Create a function to display the rules
// const rulesButton = document.getElementById("rules-btn");
// rulesButton.addEventListener("click", function() {
//   const rules = document.getElementById("rules");
//   rules.textContent = "Rock beats scissors, scissors beats paper, and paper beats rock.";
// }
// );

// // Create a function to hide the rules
// const hideRulesButton = document.getElementById("hide-rules-btn");
// hideRulesButton.addEventListener("click", function() {
//   const rules = document.getElementById("rules");
//   rules.textContent = "";
// }
// );
