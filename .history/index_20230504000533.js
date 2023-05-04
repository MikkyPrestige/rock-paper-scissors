const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  // console.log(options[random])
  return options[random];
};

// computerPlay()

const playerSelection = prompt("Choose either Rock, Paper or Scissors");
const computerSelection = computerPlay();

// console.log(playerSelection)
// console.log(computerSelection)

const playRound = (playerSelection, computerSelection) => {
  if (!playerSelection) {
    return "No player selection";
  } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a tie";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You win! Rock beats Scissors";
  }
  else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You win! Paper beats Rock";
  }
  else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You win! Scissors beats Paper";
  }
  else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You lose! Paper beats Rock";
  }
  else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You lose! Scissors beats Paper";
  }
  else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You lose! Rock beats Scissors";
  }
  else {
    return "Invalid input";
  }
};


// console.log(playRound(playerSelection, computerSelection))
