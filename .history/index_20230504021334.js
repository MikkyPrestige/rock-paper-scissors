const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  const p = playerSelection.toLowerCase();
  const c = computerSelection.toLowerCase();
  
  switch (p) {
    case "rock":
      switch (c) {
        case "rock":
          return "It's a tie";
        case "paper":
          return "You lose! Paper beats Rock";
        case "scissors":
          return "You win! Rock beats Scissors";
        default:
          break;
      }
      break;
    case "paper":
      switch (c) {
        case "rock":
          return "You win! Paper beats Rock";
        case "paper":
          return "It's a tie";
        case "scissors":
          return "You lose! Scissors beats Paper";
        default:
          break;
      }
      break;
    case "scissors":
      switch (c) {
        case "rock":
          return "You lose! Rock beats Scissors";
        case "paper":
          return "You win! Scissors beats Paper";
        case "scissors":
          return "It's a tie";
        default:
          break;
      }
      break;
    default:
      // alert("Invalid input");
      return;
  }
};


// const playRound = (playerSelection, computerSelection) => {
//   if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
//     return "It's a tie";
//   } else if (
//     playerSelection.toLowerCase() === "rock" &&
//     computerSelection.toLowerCase() === "scissors"
//   ) {
//     return "You win! Rock beats Scissors";
//   } else if (
//     playerSelection.toLowerCase() === "paper" &&
//     computerSelection.toLowerCase() === "rock"
//   ) {
//     return "You win! Paper beats Rock";
//   } else if (
//     playerSelection.toLowerCase() === "scissors" &&
//     computerSelection.toLowerCase() === "paper"
//   ) {
//     return "You win! Scissors beats Paper";
//   } else if (
//     playerSelection.toLowerCase() === "rock" &&
//     computerSelection.toLowerCase() === "paper"
//   ) {
//     return "You lose! Paper beats Rock";
//   } else if (
//     playerSelection.toLowerCase() === "paper" &&
//     computerSelection.toLowerCase() === "scissors"
//   ) {
//     return "You lose! Scissors beats Paper";
//   } else if (
//     playerSelection.toLowerCase() === "scissors" &&
//     computerSelection.toLowerCase() === "rock"
//   ) {
//     return "You lose! Rock beats Scissors";
//   } else return;
// };

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = "";
    while (
      !playerSelection ||
      !["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())
    ) {
      playerSelection = prompt("Choose either Rock, Paper or Scissors");
      if (playerSelection === "") {
        alert("Selection can't be empty");
      } else if (!playerSelection) {
        alert("Game cancelled");
        return;
      } else if (
        !["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())
      ) {
        alert("Invalid selection! Please choose Rock, Paper, or Scissors");
      }
    }
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
    console.log(
      `You win! Your score is ${playerScore} and the computer's score is ${computerScore}`
    );
  } else {
    console.log(
      `You lose! Your score is ${playerScore} and the computer's score is ${computerScore}`
    );
  }
  return;
};

game();
