// Create three buttons, one for each selection. Add an event listener to the buttons that call  your playRound function with the correct playerSelection every time a button is clicked.  (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.

// Get a random selection for the computer
const computerPlay = () => {
  const words = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};

const result = document.getElementById("result");

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

// Define variables to store the game scores
let playerScore = 0;
let computerScore = 0;

// Define the playRound function
function playRound(playerSelection) {
  // Get the computer's selection
  const computerSelection = computerPlay();
  let roundResult;

  // Determine the winner
  if (playerSelection === computerSelection) {
    roundResult = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  // Display the results
  result.textContent = roundResult;

  // Check if the game is over
  if (playerScore === 5 || computerScore === 5) {
    const finalResult = document.getElementById("final-result");
    finalResult.textContent = playerScore > computerScore
      ? "You win!"
      : "You lose!";
    playerScore = 0;
    computerScore = 0;
  }
}

// Create a function to reset the game
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", function() {
  const finalResult = document.getElementById("final-result");
  finalResult.textContent = "";
  result.textContent = "";
}
);

// Create a function to quit the game
const quitButton = document.getElementById("quit-btn");
quitButton.addEventListener("click", function() {
  const finalResult = document.getElementById("final-result");
  finalResult.textContent = "Thanks for playing!";
  result.textContent = "";
  playerScore = 0;
  computerScore = 0;
}
);

// Create a function to play again
const playAgainButton = document.getElementById("play-again-btn");
playAgainButton.addEventListener("click", function() {
  const finalResult = document.getElementById("final-result");
  finalResult.textContent = "";
  result.textContent = "";
  playerScore = 0;
  computerScore = 0;
}
);

// Create a function to display the rules
const rulesButton = document.getElementById("rules-btn");
rulesButton.addEventListener("click", function() {
  const rules = document.getElementById("rules");
  rules.textContent = "Rock beats scissors, scissors beats paper, and paper beats rock.";
}
);

// Create a function to hide the rules
const hideRulesButton = document.getElementById("hide-rules-btn");
hideRulesButton.addEventListener("click", function() {
  const rules = document.getElementById("rules");
  rules.textContent = "";
}
);

// Create a function to display the scores
const scoresButton = document.getElementById("scores-btn");
scoresButton.addEventListener("click", function() {
  const scores = document.getElementById("scores");
  scores.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
);

// Create a function to hide the scores
const hideScoresButton = document.getElementById("hide-scores-btn");
hideScoresButton.addEventListener("click", function() {
  const scores = document.getElementById("scores");
  scores.textContent = "";
}
);

// Create a function to display the final result
const finalResultButton = document.getElementById("final-result-btn");
finalResultButton.addEventListener("click", function() {
  const finalResult = document.getElementById("final-result");
  finalResult.textContent = playerScore > computerScore
    ? "You win!"
    : "You lose!";
}
);

// Create a function to hide the final result
const hideFinalResultButton = document.getElementById("hide-final-result-btn");
hideFinalResultButton.addEventListener("click", function() {
  const finalResult = document.getElementById("final-result");
  finalResult.textContent = "";
}
);

// Create a function to display the result
const resultButton = document.getElementById("result-btn");
resultButton.addEventListener("click", function() {
  const result = document.getElementById("result");
  result.textContent = "Click one of the buttons below to play.";
}
);

// Create a function to hide the result
const hideResultButton = document.getElementById("hide-result-btn");
hideResultButton.addEventListener("click", function() {
  const result = document.getElementById("result");
  result.textContent = "";
}
);
