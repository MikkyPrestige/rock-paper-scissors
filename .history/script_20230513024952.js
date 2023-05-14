// Create three buttons, one for each selection. Add an event listener to the buttons that call  your playRound function with the correct playerSelection every time a button is clicked.  (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.

// Get a random selection for the computer
// const computerPlay = () => {
//   const words = ["rock", "paper", "scissors"];
//   const random = Math.floor(Math.random() * words.length);
//   return words[random];
// };

const options = ['rock', 'paper', 'scissors'];

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  // get DOM elements for buttons and result display
  const rockBtn = document.getElementById('rock');
  const paperBtn = document.getElementById('paper');
  const scissorsBtn = document.getElementById('scissors');
  const resultDisplay = document.getElementById('result');

  // add event listeners to buttons
  rockBtn.addEventListener('click', () => console,log(`You selected ${playerSelection} and the computer selected ${computerSelection}. ${roundResult}`)
  );
  paperBtn.addEventListener('click', () => playRound('paper'));
  scissorsBtn.addEventListener('click', () => playRound('scissors'));

  function playRound(playerSelection) {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    let roundResult;

    if (playerSelection === computerSelection) {
      roundResult = "It's a tie!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
      playerScore++;
      roundResult = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      computerScore++;
      roundResult = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    // update result display
    resultDisplay.textContent = roundResult;

    // check for end of game
    if (playerScore === 5) {
      resultDisplay.textContent = `You win the game! Final score: ${playerScore} - ${computerScore}`;
      resetGame();
    } else if (computerScore === 5) {
      resultDisplay.textContent = `You lose the game! Final score: ${playerScore} - ${computerScore}`;
      resetGame();
    }
  }

  function resetGame() {
    // remove event listeners from buttons
    rockBtn.removeEventListener('click', () => playRound('rock'));
    paperBtn.removeEventListener('click', () => playRound('paper'));
    scissorsBtn.removeEventListener('click', () => playRound('scissors'));
  }
}


// // Create a function to reset the game
// const resetButton = document.getElementById("reset-btn");
// resetButton.addEventListener("click", function() {
//   const finalResult = document.getElementById("final-result");
//   finalResult.textContent = "";
//   result.textContent = "";
// }
// );

// // Create a function to quit the game
// const quitButton = document.getElementById("quit-btn");
// quitButton.addEventListener("click", function() {
//   const finalResult = document.getElementById("final-result");
//   finalResult.textContent = "Thanks for playing!";
//   result.textContent = "";
//   playerScore = 0;
//   computerScore = 0;
// }
// );

// // Create a function to play again
// const playAgainButton = document.getElementById("play-again-btn");
// playAgainButton.addEventListener("click", function() {
//   const finalResult = document.getElementById("final-result");
//   finalResult.textContent = "";
//   result.textContent = "";
//   playerScore = 0;
//   computerScore = 0;
// }
// );

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
