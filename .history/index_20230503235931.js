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
  } else {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
      return "It's a tie";
    }
    if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection.toLowerCase() === "paper") {
        return "You lose! Paper beats Rock";
      } else {
        return "You win! Rock beats Scissors";
      }
    }
    if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats Rock";
      } else {
        return "You lose! Scissors beats Paper";
      }
    }
    if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection.toLowerCase() === "rock") {
        return "You lose! Rock beats Scissors";
      } else {
        return "You win! Scissors beats Paper";
      }
    }
    return "Invalid input";
  }
};

// console.log(playRound(playerSelection, computerSelection))
