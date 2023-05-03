const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  // if (
  //   playerSelection === "" ||
  //   playerSelection === null ||
  //   playerSelection === undefined
  // ) {
  //   return "Please choose Rock, Paper, or Scissors";
  // } else {
  //   playerSelection = playerSelection.toLowerCase();
  // }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return "It's a tie!";
      }
      if (computerSelection === "paper") {
        return "You lose! Paper beats Rock";
      }
      if (computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        return "You win! Paper beats Rock";
      }
      if (computerSelection === "paper") {
        return "It's a tie!";
      }
      if (computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
      }
      if (computerSelection === "paper") {
        return "You win! Scissors beats Paper";
      }
      if (computerSelection === "scissors") {
        return "It's a tie!";
      }
      break;
    default:
      return "Invalid selection! Please choose Rock, Paper, or Scissors.";
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let isValidInput = false;
  let playerSelection;
  while (!isValidInput) {
    playerSelection = prompt("Choose Rock, Paper, or Scissors:");
    if ( playerSelection === "" ||
      playerSelection === null ||
      playerSelection === undefined) {
      return "Game canceled by user";
    } else if (["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
      isValidInput = true;
      playerSelection = playerSelection.toLowerCase();
    }
  }
  for (let i = 0; i < 5; i++) {
    // const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return `You win ${playerScore} to ${computerScore}`
  } else {
    return `You lose ${computerScore} to ${playerScore}`;
  }
};

game();
