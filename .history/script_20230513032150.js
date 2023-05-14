 // get DOM elements for buttons and result display
 const rockBtn = document.getElementById('rock');
 const paperBtn = document.getElementById('paper');
 const scissorsBtn = document.getElementById('scissors');
 const resultDisplay = document.getElementById('result');
 const winner = document.getElementById('winner');
 const reset = document.getElementById('reset');
 const replay = document.getElementById('replay');

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
  rockBtn.addEventListener('click', () => playRound('rock'));
  paperBtn.addEventListener('click', () => playRound('paper'));
  scissorsBtn.addEventListener('click', () => playRound('scissors'));

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

    // check for end of game
    if (playerScore === 5) {
      winner.textContent = `You win the game! Final score: ${playerScore} - ${computerScore}`;
      resetGame();
    } else if (computerScore === 5) {
      winner.textContent = `You lose the game! Final score: ${playerScore} - ${computerScore}`;
      resetGame();
    }
  }

  function resetGame() {
    // // remove event listeners from buttons
    // rockBtn.removeEventListener('click', () => playRound('rock'));
    // paperBtn.removeEventListener('click', () => playRound('paper'));
    // scissorsBtn.removeEventListener('click', () => playRound('scissors'));
  }
}

// call playGame function when DOM is loaded
window.addEventListener('DOMContentLoaded', playGame);


// Create a function to reset the game
reset.addEventListener("click", function() {
  winner.textContent = "";
  resultDisplay.textContent = "";
}
);

// Create a function to play again
replay.addEventListener("click", function() {
  winner.textContent = "";
  resultDisplay.textContent = "";
  playerScore = 0;
  computerScore = 0;
}
);

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

// // Create a function to display the scores
// const scoresButton = document.getElementById("scores-btn");
// scoresButton.addEventListener("click", function() {
//   const scores = document.getElementById("scores");
//   scores.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
// }
// );

// // Create a function to hide the scores
// const hideScoresButton = document.getElementById("hide-scores-btn");
// hideScoresButton.addEventListener("click", function() {
//   const scores = document.getElementById("scores");
//   scores.textContent = "";
// }
// );

// // Create a function to display the final result
// const finalResultButton = document.getElementById("final-result-btn");
// finalResultButton.addEventListener("click", function() {
//   const finalResult = document.getElementById("final-result");
//   finalResult.textContent = playerScore > computerScore
//     ? "You win!"
//     : "You lose!";
// }
// );

// // Create a function to hide the final result
// const hideFinalResultButton = document.getElementById("hide-final-result-btn");
// hideFinalResultButton.addEventListener("click", function() {
//   const finalResult = document.getElementById("final-result");
//   finalResult.textContent = "";
// }
// );

// // Create a function to display the result
// const resultButton = document.getElementById("result-btn");
// resultButton.addEventListener("click", function() {
//   const result = document.getElementById("result");
//   result.textContent = "Click one of the buttons below to play.";
// }
// );

// // Create a function to hide the result
// const hideResultButton = document.getElementById("hide-result-btn");
// hideResultButton.addEventListener("click", function() {
//   const result = document.getElementById("result");
//   result.textContent = "";
// }
// );
