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
 if (playerInput === "") {
    alert("Selection can't be empty");
    playerSelection();
  } else if (!playerInput) {
    quitGame();
  } else if (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
    alert("Please enter 'rock', 'paper', or 'scissors'");
    playerSelection();
  } else {
    return playerInput;
  }
};


const playRound = (playerSelection, computerSelection) => {
  let playerValue, computerValue;

  switch(playerSelection) {
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

  switch(computerSelection) {
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
    return "It's a tie!";
  } else if (playerValue === 1 && computerValue === 2) {
    return "You win! Paper beats rock";
  } else if (playerValue === 1 && computerValue === 3) {
    

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
