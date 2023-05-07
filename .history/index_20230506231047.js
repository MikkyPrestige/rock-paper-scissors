const computerPlay = () => {
  const words = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};

const quitGame = () => {
  const quit = prompt("Are you sure you want to quit the game? Enter 'yes' or 'no'");
  if (quit === "yes") {
    alert("Thanks for playing!");
    return;
  } else if (quit === "no") {
    alert("Great! Let's keep playing!");
    playerSelection();
  } else {
    alert("Please enter 'yes' or 'no'");
    quitGame();
  }
};


const playerSelection = () => {
  const playerInput = prompt("Rock, Paper, or Scissors?");
  const playerInputTrimLower = playerInput;
 if (playerInputTrimLower === "") {
    alert("Selection can't be empty");
    playerSelection();
  } else if (!playerInputTrimLower) {
    quitGame();
  } else if (playerInputTrimLower !== "rock" &&playerInputTrimLower !== "paper" && playerInputTrimLower !== "scissors") {
    alert("Please enter 'rock', 'paper', or 'scissors'");
    playerSelection();
  } else {
    return playerInputTrimLower;
  }
};


const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

playRound(playerSelection(),computerPlay())

// const game = () => {
//   let playerScore = 0;
//   let computerScore = 0;
//   let drawScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const player = playerSelection();
//     const computerSelection = computerPlay();
//     const result = playRound(player, computerSelection);
//     console.log(result);
//     if (result.includes("win")) {
//       playerScore++;
//     } else if (result.includes("lose")) {
//       computerScore++;
//     } else if (result.includes("tie")) {
//       drawScore++;
//     }
//   }

//   if (playerScore > computerScore) {
//     console.log(
//       `You win! ${playerScore} to ${computerScore} with ${drawScore} ties`
//     );
//   } else {
//     console.log(
//       `You lose! ${computerScore} to ${playerScore} with ${drawScore} ties`
//     );
//   }
//   return;
// };

// game();
